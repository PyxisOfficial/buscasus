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
        $sql = "SELECT * FROM tbReclamacao";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $reclamacao = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
        echo json_encode($reclamacao);
        break;

    case "POST":
        $emailUsuario = $_POST['emailUsuario'];
        $tipoReclamacao = $_POST['tipoReclamacao'];
        $txtReclamacao = $_POST['txtReclamacao'];
        $dataReclamacao = $_POST['dataReclamacao'];
        $dataPlantao = $_POST['dataPlantao'];
        
        $sql = "INSERT INTO tbReclamacao(idReclamacao, emailUsuario, tipoReclamacao, txtReclamacao, dataReclamacao, dataPlantao) VALUES(null, :emailUsuario, :tipoReclamacao, :txtReclamacao, :dataReclamacao, :dataPlantao)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':emailUsuario', $emailUsuario);
        $stmt->bindParam(':tipoReclamacao', $tipoReclamacao);
        $stmt->bindParam(':txtReclamacao', $txtReclamacao);
        $stmt->bindParam(':dataReclamacao', $dataReclamacao);
        $stmt->bindParam(':dataPlantao', $dataPlantao);
        $stmt->execute();
        break;
}
?>