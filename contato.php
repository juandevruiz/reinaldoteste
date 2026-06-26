<?php
/**
 * PROCESSADOR DE CONTATO PHP PARA HOSPEDAGEM LOCAWEB
 * 
 * Este script recebe a submissão do formulário em formato JSON e envia por e-mail.
 * Para funcionar na Locaweb, o cabeçalho 'From' DEVE ser uma conta de e-mail do seu próprio domínio (ex: contato@seudominio.com.br).
 */

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

// Apenas responde a requisições POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Método não permitido."]);
    exit;
}

// Obtém o corpo da requisição JSON
$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Dados inválidos."]);
    exit;
}

// --- CONFIGURAÇÕES DA LOCAWEB ---
// 1. Defina o e-mail de destino (onde você quer receber as propostas)
$email_destino = "comercial@gestaobrunosousa.com.br"; // <-- Altere para seu e-mail de destino

// 2. Defina o e-mail de envio (MUITO IMPORTANTE: Deve ser um e-mail do próprio domínio hospedado na Locaweb!)
$email_remetente = "contato@seudominio.com.br"; // <-- Altere para um e-mail válido do seu domínio (ex: contato@consorcioreinaldo.com.br)

// 3. Assunto do e-mail
$assunto = "Novo Lead Qualificado - Site Reinaldo [" . $data['nome'] . "]";

// --- CORPO DO E-MAIL ---
$corpo = "<h1>Novo Lead Qualificado pelo Site - Reinaldo</h1>";
$corpo .= "<p><strong>Nome:</strong> " . htmlspecialchars($data['nome']) . "</p>";
$corpo .= "<p><strong>WhatsApp:</strong> " . htmlspecialchars($data['telefone']) . "</p>";
$corpo .= "<p><strong>E-mail:</strong> " . htmlspecialchars($data['email']) . "</p>";
$corpo .= "<p><strong>Cidade:</strong> " . htmlspecialchars($data['cidade']) . "</p>";
$corpo .= "<hr>";
$corpo .= "<p><strong>Produto Desejado:</strong> " . htmlspecialchars($data['produto']) . "</p>";
$corpo .= "<p><strong>Valor do Crédito:</strong> " . htmlspecialchars($data['valorCarta']) . "</p>";
$corpo .= "<p><strong>Parcela Pretendida:</strong> " . htmlspecialchars($data['valorParcela']) . "</p>";
$corpo .= "<hr>";
$corpo .= "<h3>Perfil do Cliente</h3>";
$corpo .= "<ul>";
$corpo .= "<li><strong>Possui FGTS?:</strong> " . htmlspecialchars($data['possuiFGTS']) . "</li>";
$corpo .= "<li><strong>Possui Imóvel?:</strong> " . htmlspecialchars($data['possuiImovel']) . "</li>";
$corpo .= "<li><strong>Possui Veículo?:</strong> " . htmlspecialchars($data['possuiVeiculo']) . "</li>";
$corpo .= "<li><strong>Pretende ofertar lance?:</strong> " . htmlspecialchars($data['pretendeLance']) . "</li>";
$corpo .= "<li><strong>Já conhece consórcio?:</strong> " . htmlspecialchars($data['conheceConsorcio']) . "</li>";
$corpo .= "</ul>";
$corpo .= "<hr>";
$corpo .= "<h3>Observações</h3>";
$corpo .= "<p>" . nl2br(htmlspecialchars($data['observacoes'])) . "</p>";

// --- CABEÇALHOS DO E-MAIL ---
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: Site Reinaldo <" . $email_remetente . ">\r\n";
$headers .= "Reply-To: " . $data['email'] . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// --- ENVIO ---
if (mail($email_destino, $assunto, $corpo, $headers)) {
    echo json_encode(["status" => "success", "message" => "E-mail enviado com sucesso!"]);
} else {
    // Caso o mail() falhe, retorna erro. Na Locaweb, se o From não for do próprio domínio, falhará.
    http_response_code(500);
    echo json_encode([
        "status" => "error", 
        "message" => "Erro ao enviar e-mail. Verifique se o e-mail remetente pertence ao domínio hospedado."
    ]);
}
?>
