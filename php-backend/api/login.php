<?php
ini_set('display_errors', '0');
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); echo json_encode(['error' => 'Method not allowed']); exit; }

require __DIR__ . '/auth.php';

function client_ip(): string {
    $remoteAddr = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    return filter_var($remoteAddr, FILTER_VALIDATE_IP) ? $remoteAddr : 'unknown';
}

function rate_limit_path(string $ip): string {
    $dir = rtrim(sys_get_temp_dir(), DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . 'casa-bellucci-login';
    if (!is_dir($dir)) {
        mkdir($dir, 0700, true);
    }
    return $dir . DIRECTORY_SEPARATOR . hash('sha256', $ip) . '.json';
}

$rateLimitWindow = 15 * 60;
$rateLimitMaxAttempts = 5;
$rateLimitPath = rate_limit_path(client_ip());
$rateLimitHandle = fopen($rateLimitPath, 'c+');

if ($rateLimitHandle === false || !flock($rateLimitHandle, LOCK_EX)) {
    http_response_code(500);
    echo json_encode(['error' => 'Login konnte nicht geprüft werden']);
    exit;
}

$rawAttempts = stream_get_contents($rateLimitHandle);
$decodedAttempts = json_decode($rawAttempts === false ? '' : $rawAttempts, true);
$attempts = is_array($decodedAttempts)
    ? [
        'count' => (int) ($decodedAttempts['count'] ?? 0),
        'first' => (int) ($decodedAttempts['first'] ?? time()),
    ]
    : ['count' => 0, 'first' => time()];

if (time() - $attempts['first'] > $rateLimitWindow) {
    $attempts = ['count' => 0, 'first' => time()];
}

if ($attempts['count'] >= $rateLimitMaxAttempts) {
    flock($rateLimitHandle, LOCK_UN);
    fclose($rateLimitHandle);
    http_response_code(429);
    echo json_encode(['error' => 'Zu viele Fehlversuche. Bitte später erneut versuchen.']);
    exit;
}

$config = require __DIR__ . '/../config.php';
$input = json_decode(file_get_contents('php://input'), true);
$password = $input['password'] ?? '';

if (!password_verify((string) $password, require_password_hash($config))) {
    $attempts['count'] += 1;
    ftruncate($rateLimitHandle, 0);
    rewind($rateLimitHandle);
    fwrite($rateLimitHandle, json_encode($attempts));
    fflush($rateLimitHandle);
    flock($rateLimitHandle, LOCK_UN);
    fclose($rateLimitHandle);
    http_response_code(401);
    echo json_encode(['error' => 'Falsches Passwort']);
    exit;
}

ftruncate($rateLimitHandle, 0);
fflush($rateLimitHandle);
flock($rateLimitHandle, LOCK_UN);
fclose($rateLimitHandle);

$token = create_auth_token($config);
echo json_encode([
    'token' => $token,
    'expiresIn' => session_ttl($config),
]);
