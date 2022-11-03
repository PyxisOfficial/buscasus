<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include '../../Connection.php';
$connection = new Connection;
$conn = $connection->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "GET":
        $sql = "SELECT * FROM tbFeedback";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $feedback = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
        echo json_encode($feedback);
        break;

    case "POST":
        $emailUsuario = $_POST['emailUsuario'];
        $assuntoFeedback = $_POST['assuntoFeedback'];
        $descricaoFeedback = $_POST['descricaoFeedback'];
        
        $sql = "INSERT INTO tbFeedback(idFeedback, emailUsuario, assuntoFeedback, descricaoFeedback) VALUES(null, :emailUsuario, :assuntoFeedback, :descricaoFeedback)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':emailUsuario', $emailUsuario);
        $stmt->bindParam(':assuntoFeedback', $assuntoFeedback);
        $stmt->bindParam(':descricaoFeedback', $descricaoFeedback);
        $stmt->execute();
        break;
}
?>