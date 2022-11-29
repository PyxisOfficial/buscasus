<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include '../../Connection.php';
$connection = new Connection;
$conn = $connection->connect();

if (isset($_GET['count'])) {

    $sql = "SELECT COUNT(idReclamacao) AS idReclamacao FROM tbReclamacao";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $reclamacao = $stmt->fetch(PDO::FETCH_ASSOC);

    echo json_encode($reclamacao);
} else {
    $sql = "SELECT r.idReclamacao, u.emailUsuario, r.txtReclamacao, DATE_FORMAT(r.dataReclamacao, '%d/%m/%Y') AS dataReclamacao, DATE_FORMAT(r.dataPlantao, '%d/%m/%Y') AS dataPlantao, r.idUsuario, r.idTipoReclamacao, tr.tipoReclamacao, r.idHospital FROM tbReclamacao r
    INNER JOIN tbTipoReclamacao tr
    ON r.idTipoReclamacao = tr.idTipoReclamacao
    INNER JOIN tbUsuario u
    ON r.idUsuario = u.idUsuario
    ORDER BY dataReclamacao DESC";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $reclamacao = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($reclamacao);
}

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "POST":
        $emailUsuario = $_POST['emailUsuario'];
        $tipoReclamacao = $_POST['tipoReclamacao'];
        $txtReclamacao = $_POST['txtReclamacao'];
        $dataPlantao = $_POST['dataPlantao'];
        $idUsuario = $_POST['idUsuario'];
        $idHospital = $_POST['idHospital'];
        
        $sql = "INSERT INTO tbReclamacao(idReclamacao, emailUsuario, tipoReclamacao, txtReclamacao, dataPlantao, idUsuario, idHospital) VALUES(null, :emailUsuario, :tipoReclamacao, :txtReclamacao, :dataPlantao, :idUsuario, :idHospital)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':emailUsuario', $emailUsuario);
        $stmt->bindParam(':tipoReclamacao', $tipoReclamacao);
        $stmt->bindParam(':txtReclamacao', $txtReclamacao);
        $stmt->bindParam(':dataPlantao', $dataPlantao);
        $stmt->bindParam(':idUsuario', $idUsuario);
        $stmt->bindParam(':idHospital', $idHospital);
        $stmt->execute();
        break;
}
?>