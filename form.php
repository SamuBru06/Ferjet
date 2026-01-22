<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Metodo non consentito.']);
    exit;
}

$nome = trim($_POST['nome'] ?? '');
$email = trim($_POST['email'] ?? '');
$telefono = trim($_POST['telefono'] ?? '');
$progetto = trim($_POST['progetto'] ?? '');
$messaggio = trim($_POST['messaggio'] ?? '');

if ($nome === '' || $email === '' || $telefono === '' || $progetto === '' || $messaggio === '') {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Compila tutti i campi richiesti.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Email non valida.']);
    exit;
}

$to = 'info@ferjet.it';
$subject = 'Richiesta preventivo FERJET';
$body = "Nome e cognome: {$nome}\n";
$body .= "Email: {$email}\n";
$body .= "Telefono: {$telefono}\n";
$body .= "Tipo di progetto: {$progetto}\n";
$body .= "Descrizione: {$messaggio}\n";

$headers = "From: FERJET <no-reply@ferjet.altervista.org>\r\n";
$headers .= "Reply-To: {$email}\r\n";

$sent = mail($to, $subject, $body, $headers);

if (!$sent) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Errore invio email.']);
    exit;
}

echo json_encode(['ok' => true]);
