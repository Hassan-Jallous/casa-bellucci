<?php

function json_error(int $status, string $message): void {
    http_response_code($status);
    echo json_encode(['error' => $message]);
    exit;
}

function auth_header(): string {
    if (!empty($_SERVER['HTTP_AUTHORIZATION'])) {
        return (string) $_SERVER['HTTP_AUTHORIZATION'];
    }
    if (!empty($_SERVER['REDIRECT_HTTP_AUTHORIZATION'])) {
        return (string) $_SERVER['REDIRECT_HTTP_AUTHORIZATION'];
    }
    if (function_exists('apache_request_headers')) {
        $headers = apache_request_headers();
        foreach ($headers as $name => $value) {
            if (strtolower((string) $name) === 'authorization') {
                return (string) $value;
            }
        }
    }
    return '';
}

function bearer_token(): string {
    $header = auth_header();
    if (!preg_match('/^Bearer\s+(.+)$/i', $header, $matches)) {
        return '';
    }
    return trim($matches[1]);
}

function session_dir(array $config): string {
    $dir = $config['session_dir'] ?? null;
    if (!is_string($dir) || $dir === '') {
        $dir = rtrim(sys_get_temp_dir(), DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . 'casa-bellucci-sessions';
    }
    if (!is_dir($dir) && !mkdir($dir, 0700, true)) {
        json_error(500, 'Session-Speicher konnte nicht erstellt werden');
    }
    return $dir;
}

function session_ttl(array $config): int {
    $ttl = (int) ($config['session_ttl_seconds'] ?? 86400);
    return max(900, min($ttl, 7 * 86400));
}

function token_hash(string $token): string {
    return hash('sha256', $token);
}

function token_path(array $config, string $token): string {
    return session_dir($config) . DIRECTORY_SEPARATOR . token_hash($token) . '.json';
}

function create_auth_token(array $config): string {
    $token = bin2hex(random_bytes(32));
    $path = token_path($config, $token);
    $payload = [
        'createdAt' => time(),
        'expiresAt' => time() + session_ttl($config),
    ];
    if (file_put_contents($path, json_encode($payload), LOCK_EX) === false) {
        json_error(500, 'Session konnte nicht gespeichert werden');
    }
    chmod($path, 0600);
    return $token;
}

function require_auth(array $config): void {
    $token = bearer_token();
    if ($token === '') {
        json_error(401, 'Unauthorized');
    }

    $path = token_path($config, $token);
    if (!is_file($path)) {
        json_error(401, 'Unauthorized');
    }

    $data = json_decode((string) file_get_contents($path), true);
    $expiresAt = is_array($data) ? (int) ($data['expiresAt'] ?? 0) : 0;
    if ($expiresAt < time()) {
        unlink($path);
        json_error(401, 'Unauthorized');
    }
}

function clear_auth_tokens(array $config): void {
    $dir = session_dir($config);
    foreach (glob($dir . DIRECTORY_SEPARATOR . '*.json') ?: [] as $file) {
        if (is_file($file)) {
            unlink($file);
        }
    }
}

function require_password_hash(array $config): string {
    $hash = $config['admin_password_hash'] ?? '';
    if (!is_string($hash) || $hash === '' || !password_get_info($hash)['algo']) {
        json_error(500, 'Admin-Passwort-Hash fehlt oder ist ungültig');
    }
    return $hash;
}
