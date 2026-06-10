<?php
ini_set('display_errors', '0');
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); echo json_encode(['error' => 'Method not allowed']); exit; }

require __DIR__ . '/auth.php';

$configPath = __DIR__ . '/../config.php';
$config = require $configPath;
require_auth($config);

$input = json_decode(file_get_contents('php://input'), true);
$currentPassword = $input['currentPassword'] ?? '';
$newPassword = $input['newPassword'] ?? '';

if (!password_verify((string) $currentPassword, require_password_hash($config))) {
    http_response_code(400);
    echo json_encode(['error' => 'Aktuelles Passwort ist falsch']);
    exit;
}

if (strlen($newPassword) < 12) {
    http_response_code(400);
    echo json_encode(['error' => 'Neues Passwort muss mindestens 12 Zeichen haben']);
    exit;
}

// Update config file
$newConfig = "<?php\nreturn [\n    'admin_password_hash' => " . var_export(password_hash($newPassword, PASSWORD_DEFAULT), true) . ",\n    'session_ttl_seconds' => " . var_export((int) ($config['session_ttl_seconds'] ?? 86400), true) . ",\n";
if (isset($config['session_dir']) && is_string($config['session_dir']) && $config['session_dir'] !== '') {
    $newConfig .= "    'session_dir' => " . var_export($config['session_dir'], true) . ",\n";
}
$newConfig .= "    'pdf_dir' => " . var_export((string) $config['pdf_dir'], true) . ",\n];\n";

$configDir = dirname($configPath);
$tempPath = tempnam($configDir, 'config.');

if ($tempPath === false) {
    http_response_code(500);
    echo json_encode(['error' => 'Passwort konnte nicht gespeichert werden']);
    exit;
}

$existingMode = file_exists($configPath) ? (fileperms($configPath) & 0777) : 0644;
$written = file_put_contents($tempPath, $newConfig, LOCK_EX);
if ($written !== false) {
    chmod($tempPath, $existingMode);
}
$renamed = $written !== false && rename($tempPath, $configPath);

if (!$renamed) {
    if (is_file($tempPath)) {
        unlink($tempPath);
    }
    http_response_code(500);
    echo json_encode(['error' => 'Passwort konnte nicht gespeichert werden']);
    exit;
}

// Return new token with updated password
$newConfigArray = require $configPath;
clear_auth_tokens($newConfigArray);
$newToken = create_auth_token($newConfigArray);
echo json_encode([
    'success' => true,
    'token' => $newToken,
    'expiresIn' => session_ttl($newConfigArray),
]);
