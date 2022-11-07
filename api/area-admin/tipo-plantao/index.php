<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include '../../Connection.php';
$connection = new Connection;
$conn = $connection->connect();

if (isset($_GET['search'])) {
    $search = $_GET['search'];

    $sql = "SELECT * FROM tbTipoPlantao WHERE tipoPlantao LIKE '%$search%'";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $tipoPlantao = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($tipoPlantao);
} else {
    $sql = "SELECT * FROM tbTipoPlantao";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $tipoPlantao = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($tipoPlantao);
}

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "POST":
        $tipoPlantao = $_POST['tipoPlantao'];
        
        $sql = "INSERT INTO tbTipoPlantao(idTipoPlantao, tipoPlantao) VALUES(null, :tipoPlantao)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':tipoPlantao', $tipoPlantao);
        $stmt->execute();
        break;

    case "PUT":
        $tipoPlantao = $_GET['tipoPlantao'];
        $idTipoPlantao = $_GET['idTipoPlantao'];
        
        $sql = "UPDATE tbTipoPlantao SET tipoPlantao =:tipoPlantao WHERE idTipoPlantao =:idTipoPlantao";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':tipoPlantao', $tipoPlantao);
        $stmt->bindParam(':idTipoPlantao', $idTipoPlantao);
        $stmt->execute();
        break;

    case "DELETE":
        $idTipoPlantao = $_GET['idTipoPlantao'];

        $sql = "DELETE FROM tbTipoPlantao WHERE idTipoPlantao = :idTipoPlantao";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':idTipoPlantao', $idTipoPlantao);
        $stmt->execute();
        break;
}
?>