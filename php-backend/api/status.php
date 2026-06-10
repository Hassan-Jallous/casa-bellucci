<?php
ini_set('display_errors', '0');
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit; }

require __DIR__ . '/auth.php';

$config = require __DIR__ . '/../config.php';
require_auth($config);

$types = ['fruehstueck', 'lunch', 'dinner', 'weine'];
$status = [];

foreach ($types as $type) {
    $pdfPath = $config['pdf_dir'] . '/' . $type . '.pdf';
    $metaPath = $config['pdf_dir'] . '/' . $type . '.json';

    if (file_exists($pdfPath)) {
        $meta = file_exists($metaPath) ? json_decode(file_get_contents($metaPath), true) : [];
        $status[$type] = [
            'exists' => true,
            'url' => '/pdf/' . $type . '.pdf',
            'size' => filesize($pdfPath),
            'uploadedAt' => $meta['uploadedAt'] ?? date('c', filemtime($pdfPath)),
        ];
    } else {
        $status[$type] = null;
    }
}

echo json_encode($status);
