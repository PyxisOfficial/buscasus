<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include '../../Connection.php';
$connection = new Connection;
$conn = $connection->connect();

if (isset($_GET['search'])) {
    $search = $_GET['search'];

    $sql = "SELECT * FROM tbtipoReclamacao WHERE tipoReclamacao LIKE '%$search%'";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $tipoReclamacao = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($tipoReclamacao);
} else {
    $sql = "SELECT * FROM tbTipoReclamacao";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $tipoReclamacao = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($tipoReclamacao);
}

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "POST":
        $tipoReclamacao = $_POST['tipoReclamacao'];
        
        $sql = "INSERT INTO tbTipoReclamacao(idTipoReclamacao, tipoReclamacao) VALUES(null, :tipoReclamacao)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':tipoReclamacao', $tipoReclamacao);
        $stmt->execute();
        break;

    case "PUT":
        $tipoReclamacao = $_GET['tipoReclamacao'];
        $idTipoReclamacao = $_GET['idTipoReclamacao'];
        
        $sql = "UPDATE tbTipoReclamacao SET tipoReclamacao =:tipoReclamacao WHERE idTipoReclamacao =:idTipoReclamacao";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':tipoReclamacao', $tipoReclamacao);
        $stmt->bindParam(':idTipoReclamacao', $idTipoReclamacao);
        $stmt->execute();
        break;

    case "DELETE":
        $idTipoReclamacao = $_GET['idTipoReclamacao'];

        $sql = "DELETE FROM tbTipoReclamacao WHERE idTipoReclamacao = :idTipoReclamacao";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':idTipoReclamacao', $idTipoReclamacao);
        $stmt->execute();
        break;
}
?>