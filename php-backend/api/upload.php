<?php
ini_set('display_errors', '0');
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); echo json_encode(['error' => 'Method not allowed']); exit; }

require __DIR__ . '/auth.php';

$config = require __DIR__ . '/../config.php';
require_auth($config);

$validTypes = ['fruehstueck', 'lunch', 'dinner', 'weine'];
$menuType = $_POST['menuType'] ?? '';

if (!in_array($menuType, $validTypes)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid menu type']);
    exit;
}

if (!isset($_FILES['file']) || $_FILES['file']['error'] !== UPLOAD_ERR_OK) {
    http_response_code(400);
    echo json_encode(['error' => 'No file provided']);
    exit;
}

$file = $_FILES['file'];

// Validate PDF
$finfo = finfo_open(FILEINFO_MIME_TYPE);
$mimeType = finfo_file($finfo, $file['tmp_name']);

if ($mimeType !== 'application/pdf') {
    http_response_code(400);
    echo json_encode(['error' => 'File must be a PDF']);
    exit;
}

// 10MB limit
if ($file['size'] > 10 * 1024 * 1024) {
    http_response_code(400);
    echo json_encode(['error' => 'File exceeds 10MB limit']);
    exit;
}

$uploadDir = $config['pdf_dir'];
if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0755, true);
}

$targetPath = $uploadDir . '/' . $menuType . '.pdf';

if (!move_uploaded_file($file['tmp_name'], $targetPath)) {
    http_response_code(500);
    echo json_encode(['error' => 'Upload failed']);
    exit;
}

// Save metadata
$metaFile = $uploadDir . '/' . $menuType . '.json';
$meta = [
    'uploadedAt' => date('c'),
    'size' => $file['size'],
    'originalName' => $file['name'],
];
file_put_contents($metaFile, json_encode($meta));

echo json_encode([
    'url' => '/pdf/' . $menuType . '.pdf',
    'size' => $file['size'],
    'uploadedAt' => $meta['uploadedAt'],
]);
