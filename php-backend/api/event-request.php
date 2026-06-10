<?php
// Event-Anfrage-Endpoint fuer die Events-Landingpage (Firmenfeier, Weihnachts-
// feier, Geburtstag, private Feiern). Nimmt JSON per POST entgegen, validiert,
// prueft Honeypot, schreibt jede Anfrage als JSON-Zeile nach
// ../logs/event-requests.log (Ausfallsicherung) und verschickt ZWEI gebrandete
// HTML-Mails: (1) Benachrichtigung an das Restaurant, (2) Bestaetigung an den
// Gast (lokalisiert de/en/it). Keine Auth noetig (oeffentliches Formular), daher
// Honeypot + simples Rate-Limit.
ini_set('display_errors', '0');
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

// Empfaenger (Restaurant). config.php ist optional (gitignored, liegt evtl. nicht
// auf dem Server), Fallback-Konstante greift dann.
const FALLBACK_EVENT_EMAIL = 'info@casabellucci.de';
const FROM_HEADER = 'Casa Bellucci <no-reply@casabellucci.de>';
const REPLY_TO_OWNER = 'info@casabellucci.de';
const SITE_PHONE = '+49 162 3009925';
const SITE_PHONE_HREF = '+491623009925';
const SITE_URL = 'https://casabellucci.de';

$config = [];
$configPath = __DIR__ . '/../config.php';
if (is_file($configPath)) {
    $loaded = require $configPath;
    if (is_array($loaded)) {
        $config = $loaded;
    }
}
$recipient = isset($config['event_email']) && is_string($config['event_email']) && $config['event_email'] !== ''
    ? $config['event_email']
    : FALLBACK_EVENT_EMAIL;

// JSON-Body lesen.
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid payload']);
    exit;
}

$clip = static function ($value, int $max): string {
    if (!is_string($value)) {
        return '';
    }
    $value = trim($value);
    return function_exists('mb_substr') ? mb_substr($value, 0, $max) : substr($value, 0, $max);
};

$name = $clip($data['name'] ?? '', 200);
$email = $clip($data['email'] ?? '', 200);
$phone = $clip($data['phone'] ?? '', 80);
$date = $clip($data['date'] ?? '', 40);
$guests = $clip($data['guests'] ?? '', 40);
$occasion = $clip($data['occasion'] ?? '', 80);
$message = $clip($data['message'] ?? '', 5000);
$honeypot = $clip($data['company'] ?? '', 200);

$lang = $clip($data['lang'] ?? 'de', 5);
if (!in_array($lang, ['de', 'en', 'it'], true)) {
    $lang = 'de';
}

// Honeypot gefuellt -> Bot. Still mit 200 ok antworten, aber NICHT versenden.
if ($honeypot !== '') {
    echo json_encode(['ok' => true]);
    exit;
}

// Pflichtfelder.
if ($name === '' || $email === '' || $message === '') {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Missing required fields']);
    exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Invalid email']);
    exit;
}

// Header-Injection abwehren.
$hasNewline = static function (string $value): bool {
    return preg_match('/[\r\n]/', $value) === 1;
};
if ($hasNewline($name) || $hasNewline($email) || $hasNewline($phone)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Invalid input']);
    exit;
}

// Log-Verzeichnis + Datei.
$logDir = __DIR__ . '/../logs';
if (!is_dir($logDir)) {
    @mkdir($logDir, 0755, true);
}
$logFile = $logDir . '/event-requests.log';
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';

// Einfaches Rate-Limit pro IP: max. 5 Anfragen in 10 Minuten.
$rateLimited = false;
if (is_file($logFile)) {
    $lines = @file($logFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    if (is_array($lines)) {
        $windowStart = time() - 600;
        $count = 0;
        foreach (array_slice($lines, -200) as $line) {
            $entry = json_decode($line, true);
            if (!is_array($entry) || !isset($entry['ip'], $entry['ts'])) {
                continue;
            }
            $ts = strtotime((string) $entry['ts']);
            if ($entry['ip'] === $ip && $ts !== false && $ts >= $windowStart) {
                $count++;
            }
        }
        if ($count >= 5) {
            $rateLimited = true;
        }
    }
}
if ($rateLimited) {
    http_response_code(429);
    echo json_encode(['ok' => false, 'error' => 'Too many requests']);
    exit;
}

// Log-Eintrag (immer vor dem Mailversand).
@file_put_contents(
    $logFile,
    json_encode([
        'ts' => date('c'),
        'ip' => $ip,
        'lang' => $lang,
        'name' => $name,
        'email' => $email,
        'phone' => $phone,
        'date' => $date,
        'guests' => $guests,
        'occasion' => $occasion,
        'message' => $message,
    ], JSON_UNESCAPED_UNICODE) . "\n",
    FILE_APPEND | LOCK_EX
);

// ---------------------------------------------------------------------------
// Aufbereitung
// ---------------------------------------------------------------------------
$e = static function (string $v): string {
    return htmlspecialchars($v, ENT_QUOTES, 'UTF-8');
};

// Anlass-Schluessel -> lesbares Label je Sprache.
$occasionMap = [
    'de' => ['firmenfeier' => 'Firmenfeier', 'geburtstag' => 'Geburtstag', 'weihnachtsfeier' => 'Weihnachtsfeier', 'private' => 'Private Feier', 'sonstiges' => 'Sonstiges'],
    'en' => ['firmenfeier' => 'Company event', 'geburtstag' => 'Birthday', 'weihnachtsfeier' => 'Christmas party', 'private' => 'Private celebration', 'sonstiges' => 'Other'],
    'it' => ['firmenfeier' => 'Evento aziendale', 'geburtstag' => 'Compleanno', 'weihnachtsfeier' => 'Festa di Natale', 'private' => 'Festa privata', 'sonstiges' => 'Altro'],
];
$occasionLabel = static function (string $key, string $lang) use ($occasionMap): string {
    if ($key === '') {
        return '';
    }
    return $occasionMap[$lang][$key] ?? ($occasionMap['de'][$key] ?? $key);
};

// Markenfarben / Tokens.
$pageBg = '#ece3d3';
$cardBg = '#fff9f0';
$ink = '#2b1f12';
$muted = '#7a6852';
$gold = '#b89150';
$hair = '#e7dcc6';

// Gebrandeter HTML-Rahmen.
$shell = static function (string $title, string $contentHtml, string $footerNote, string $preheader) use ($pageBg, $cardBg, $ink, $muted, $gold, $hair, $e): string {
    $year = date('Y');
    // title / footerNote / preheader sind kontrollierte Strings (teils mit HTML-
    // Entities fuer Umlaute), daher NICHT erneut escapen. Dynamische Werte (Name)
    // werden vom Aufrufer vor der Uebergabe escaped.
    return '<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light only"><title>' . $title . '</title></head>'
        . '<body style="margin:0;padding:0;background:' . $pageBg . ';">'
        . '<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:' . $pageBg . ';font-size:1px;line-height:1px;">' . $preheader . '</div>'
        . '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:' . $pageBg . ';">'
        . '<tr><td align="center" style="padding:30px 16px;">'
        . '<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:600px;background:' . $cardBg . ';border:1px solid ' . $hair . ';border-radius:12px;overflow:hidden;">'
        // Header
        . '<tr><td align="center" style="padding:34px 36px 24px;border-bottom:1px solid ' . $hair . ';">'
        . '<div style="font-family:\'Snell Roundhand\',\'Brush Script MT\',\'Apple Chancery\',cursive;font-size:30px;line-height:1;color:' . $gold . ';">Casa</div>'
        . '<div style="font-family:Georgia,\'Times New Roman\',serif;font-size:30px;letter-spacing:9px;color:' . $ink . ';text-transform:uppercase;line-height:1.1;margin-top:2px;">Bellucci</div>'
        . '<div style="font-family:Georgia,serif;font-size:11px;letter-spacing:3px;color:' . $muted . ';text-transform:uppercase;margin-top:12px;">Ristorante &amp; Bar &middot; Kurf&uuml;rstendamm</div>'
        . '</td></tr>'
        // Content
        . '<tr><td style="padding:32px 36px 8px;font-family:Arial,Helvetica,sans-serif;color:' . $ink . ';">'
        . '<h1 style="margin:0 0 18px;font-family:Georgia,\'Times New Roman\',serif;font-size:23px;font-weight:normal;color:' . $ink . ';">' . $title . '</h1>'
        . $contentHtml
        . '</td></tr>'
        // Footer
        . '<tr><td style="padding:24px 36px 30px;border-top:1px solid ' . $hair . ';font-family:Arial,Helvetica,sans-serif;">'
        . '<div style="height:2px;width:46px;background:' . $gold . ';margin:0 0 16px;"></div>'
        . '<div style="font-size:13px;line-height:1.7;color:' . $muted . ';">'
        . '<strong style="color:' . $ink . ';">Casa Bellucci</strong><br>'
        . 'Kurf&uuml;rstendamm 63, 10707 Berlin<br>'
        . '<a href="tel:' . SITE_PHONE_HREF . '" style="color:' . $gold . ';text-decoration:none;">' . SITE_PHONE . '</a> &middot; '
        . '<a href="mailto:' . REPLY_TO_OWNER . '" style="color:' . $gold . ';text-decoration:none;">' . REPLY_TO_OWNER . '</a><br>'
        . '<a href="' . SITE_URL . '" style="color:' . $gold . ';text-decoration:none;">casabellucci.de</a>'
        . '</div>'
        . '<div style="font-size:11px;line-height:1.6;color:' . $muted . ';margin-top:14px;">' . $footerNote . '</div>'
        . '</td></tr>'
        . '</table></td></tr></table></body></html>';
};

// Detailzeile (Label links, Wert rechts).
$row = static function (string $label, string $valueHtml) use ($muted, $ink, $hair): string {
    return '<tr>'
        . '<td style="padding:10px 0;border-bottom:1px solid ' . $hair . ';font-size:11px;letter-spacing:0.06em;text-transform:uppercase;color:' . $muted . ';width:140px;vertical-align:top;">' . $label . '</td>'
        . '<td style="padding:10px 0;border-bottom:1px solid ' . $hair . ';font-size:15px;color:' . $ink . ';vertical-align:top;">' . $valueHtml . '</td>'
        . '</tr>';
};

$messageHtml = nl2br($e($message));
$occOwner = $occasionLabel($occasion, 'de');
$occCustomer = $occasionLabel($occasion, $lang);
$dash = '&ndash;'; // nur in den internen Detailtabellen als Platzhalter

// ---------------------------------------------------------------------------
// 1) Betreiber-Mail (Deutsch)
// ---------------------------------------------------------------------------
$ownerRows = $row('Name', $e($name))
    . $row('E-Mail', '<a href="mailto:' . $e($email) . '" style="color:' . $gold . ';text-decoration:none;">' . $e($email) . '</a>')
    . $row('Telefon', $phone !== '' ? $e($phone) : $dash)
    . $row('Wunschdatum', $date !== '' ? $e($date) : $dash)
    . $row('Personen', $guests !== '' ? $e($guests) : $dash)
    . $row('Anlass', $occOwner !== '' ? $e($occOwner) : $dash)
    . $row('Nachricht', $messageHtml);

$ownerContent =
    '<p style="margin:0 0 22px;font-size:15px;line-height:1.6;color:' . $muted . ';">'
    . '&Uuml;ber das Anfrageformular auf casabellucci.de ist eine neue Event-Anfrage eingegangen.</p>'
    . '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-bottom:26px;">' . $ownerRows . '</table>'
    . '<table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="border-radius:999px;background:' . $gold . ';">'
    . '<a href="mailto:' . $e($email) . '?subject=Ihre%20Anfrage%20bei%20Casa%20Bellucci" style="display:inline-block;padding:13px 26px;font-family:Arial,Helvetica,sans-serif;font-size:14px;letter-spacing:0.04em;color:#2b1f12;text-decoration:none;font-weight:bold;">Direkt antworten</a>'
    . '</td></tr></table>'
    . '<p style="margin:22px 0 0;font-size:12px;color:' . $muted . ';">Eingegangen am ' . $e(date('d.m.Y, H:i')) . ' Uhr &middot; IP ' . $e($ip) . '</p>';

$ownerHtml = $shell('Neue Event-Anfrage', $ownerContent, 'Automatische Benachrichtigung vom Anfrageformular auf casabellucci.de.', 'Neue Event-Anfrage von ' . $e($name));

// ---------------------------------------------------------------------------
// 2) Bestaetigungs-Mail an den Gast (lokalisiert)
// ---------------------------------------------------------------------------
$t = [
    'de' => [
        'subject' => 'Ihre Anfrage bei Casa Bellucci',
        'title' => 'Vielen Dank f&uuml;r Ihre Anfrage',
        'greeting' => 'Hallo ' . $e($name) . ',',
        'body' => 'vielen Dank f&uuml;r Ihre Anfrage bei Casa Bellucci. Wir haben Ihre Nachricht erhalten und melden uns so bald wie m&ouml;glich pers&ouml;nlich bei Ihnen, um die Details Ihrer Feier zu besprechen.',
        'summaryTitle' => 'Ihre Angaben im &Uuml;berblick',
        'labels' => ['date' => 'Wunschdatum', 'guests' => 'Personen', 'occasion' => 'Anlass', 'message' => 'Nachricht'],
        'urgent' => 'Bei dringenden Fragen erreichen Sie uns telefonisch unter',
        'signoff' => 'Wir freuen uns auf Sie.',
        'team' => 'Ihr Team von Casa Bellucci',
        'footer' => 'Sie erhalten diese E-Mail, weil &uuml;ber casabellucci.de eine Anfrage mit dieser Adresse gestellt wurde.',
        'preheader' => 'Wir haben Ihre Anfrage erhalten und melden uns in K&uuml;rze.',
    ],
    'en' => [
        'subject' => 'Your enquiry at Casa Bellucci',
        'title' => 'Thank you for your enquiry',
        'greeting' => 'Hi ' . $e($name) . ',',
        'body' => 'thank you for your enquiry at Casa Bellucci. We have received your message and will get back to you personally as soon as possible to discuss the details of your celebration.',
        'summaryTitle' => 'Your details at a glance',
        'labels' => ['date' => 'Preferred date', 'guests' => 'Guests', 'occasion' => 'Occasion', 'message' => 'Message'],
        'urgent' => 'For urgent questions, you can reach us by phone at',
        'signoff' => 'We look forward to welcoming you.',
        'team' => 'Your Casa Bellucci team',
        'footer' => 'You are receiving this email because an enquiry was submitted with this address via casabellucci.de.',
        'preheader' => 'We have received your enquiry and will be in touch shortly.',
    ],
    'it' => [
        'subject' => 'La tua richiesta al Casa Bellucci',
        'title' => 'Grazie per la tua richiesta',
        'greeting' => 'Ciao ' . $e($name) . ',',
        'body' => 'grazie per la tua richiesta al Casa Bellucci. Abbiamo ricevuto il tuo messaggio e ti risponderemo personalmente al pi&ugrave; presto per definire i dettagli della tua festa.',
        'summaryTitle' => 'I tuoi dati in sintesi',
        'labels' => ['date' => 'Data desiderata', 'guests' => 'Persone', 'occasion' => 'Occasione', 'message' => 'Messaggio'],
        'urgent' => 'Per domande urgenti puoi contattarci telefonicamente al',
        'signoff' => 'Ti aspettiamo.',
        'team' => 'Il team di Casa Bellucci',
        'footer' => 'Ricevi questa email perch&eacute; tramite casabellucci.de &egrave; stata inviata una richiesta con questo indirizzo.',
        'preheader' => 'Abbiamo ricevuto la tua richiesta e ti contatteremo a breve.',
    ],
];
$c = $t[$lang];

// Zusammenfassung: nur ausgefuellte Felder zeigen, Nachricht immer.
$custRows = '';
if ($date !== '') {
    $custRows .= $row($c['labels']['date'], $e($date));
}
if ($guests !== '') {
    $custRows .= $row($c['labels']['guests'], $e($guests));
}
if ($occCustomer !== '') {
    $custRows .= $row($c['labels']['occasion'], $e($occCustomer));
}
$custRows .= $row($c['labels']['message'], $messageHtml);

$custContent =
    '<p style="margin:0 0 16px;font-size:16px;color:' . $ink . ';">' . $c['greeting'] . '</p>'
    . '<p style="margin:0 0 24px;font-size:15px;line-height:1.65;color:' . $ink . ';">' . $c['body'] . '</p>'
    . '<div style="font-size:12px;letter-spacing:0.06em;text-transform:uppercase;color:' . $muted . ';margin:0 0 8px;">' . $c['summaryTitle'] . '</div>'
    . '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-bottom:24px;">' . $custRows . '</table>'
    . '<p style="margin:0 0 24px;font-size:14px;line-height:1.6;color:' . $muted . ';">' . $c['urgent'] . ' <a href="tel:' . SITE_PHONE_HREF . '" style="color:' . $gold . ';text-decoration:none;">' . SITE_PHONE . '</a>.</p>'
    . '<p style="margin:0;font-size:15px;line-height:1.6;color:' . $ink . ';">' . $c['signoff'] . '<br><span style="font-family:Georgia,serif;font-style:italic;color:' . $gold . ';">' . $c['team'] . '</span></p>';

$custHtml = $shell($c['title'], $custContent, $c['footer'], $c['preheader']);

// ---------------------------------------------------------------------------
// Versand (HTML)
// ---------------------------------------------------------------------------
$subjEnc = static function (string $s): string {
    return '=?UTF-8?B?' . base64_encode($s) . '?=';
};
// Body base64-kodiert: bricht auf 76 Zeichen/Zeile (chunk_split) und vermeidet
// damit die RFC-5322-Grenze von 998 Zeichen pro Zeile (lange HTML-Zeilen werden
// von MTAs sonst verworfen oder als Spam gewertet). UTF-8-sicher.
$baseHeaders = [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
    'From: ' . FROM_HEADER,
    'X-Mailer: Casa Bellucci Events',
];

// Betreiber: Antwort geht an den Gast.
$ownerHeaders = array_merge($baseHeaders, ['Reply-To: ' . $name . ' <' . $email . '>']);
$ownerSubject = 'Neue Event-Anfrage, ' . $name;
$sentOwner = @mail($recipient, $subjEnc($ownerSubject), chunk_split(base64_encode($ownerHtml)), implode("\r\n", $ownerHeaders));

// Gast: Antwort geht ans Restaurant.
$custHeaders = array_merge($baseHeaders, ['Reply-To: Casa Bellucci <' . REPLY_TO_OWNER . '>']);
$sentCust = @mail($email, $subjEnc($c['subject']), chunk_split(base64_encode($custHtml)), implode("\r\n", $custHeaders));

// Erfolg melden, sobald die Anfrage gesichert ist (Log). Mailstatus zur Info.
echo json_encode(['ok' => true, 'mailed' => (bool) $sentOwner, 'confirmation' => (bool) $sentCust]);
