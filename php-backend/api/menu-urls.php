<?php
ini_set('display_errors', '0');
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Cache-Control: no-cache, no-store, must-revalidate');

$config = require __DIR__ . '/../config.php';
$types = ['fruehstueck', 'lunch', 'dinner', 'weine'];
$urls = [];

foreach ($types as $type) {
    $pdfPath = $config['pdf_dir'] . '/' . $type . '.pdf';
    if (file_exists($pdfPath)) {
        $urls[$type] = '/pdf/' . $type . '.pdf?v=' . filemtime($pdfPath);
    } else {
        $urls[$type] = '/pdf/' . $type . '.pdf';
    }
}

echo json_encode($urls);
