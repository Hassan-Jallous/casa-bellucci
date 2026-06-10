<?php
// Kopiere diese Datei zu config.php auf dem Server und setze einen eigenen Hash.
// Hash erzeugen:
// php -r 'echo password_hash("DEIN_LANGES_PASSWORT", PASSWORD_DEFAULT) . PHP_EOL;'
// config.php ist in .gitignore und gehört NICHT ins Repo.
return [
    'admin_password_hash' => 'PASTE_PASSWORD_HASH_HERE',
    'session_ttl_seconds' => 86400,
    'pdf_dir' => __DIR__ . '/pdf',
];
