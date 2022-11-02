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
        $sql = "SELECT idEspecialidade, nomeEspecialidade FROM tbEspecialidade";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if (isset($path[5]) && is_numeric($path[5])) {
            $sql .= " WHERE idHospital = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[5]);
            $stmt->execute();
            $especialidade = $stmt->fetchAll(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $especialidade = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($especialidade);
        break;

    case "POST":
        $nomeEspecialidade = $_POST['nomeEspecialidade'];
        $idHospital = $_POST['idHospital'];

        $sql = "INSERT INTO tbEspecialidade(idEspecialidade, nomeEspecialidade, idHospital) VALUES(null, :nomeEspecialidade, :idHospital)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':nomeEspecialidade', $nomeEspecialidade);
        $stmt->bindParam(':idHospital', $idHospital);
        $stmt->execute();
        break;

    case "PUT":
        $nomeEspecialidade = $_GET['nomeEspecialidade'];
        $idEspecialidade = $_GET['idEspecialidade'];

        $sql = "UPDATE tbEspecialidade SET nomeEspecialidade= :nomeEspecialidade WHERE idEspecialidade = :idEspecialidade";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':idEspecialidade', $idEspecialidade);
        $stmt->bindParam(':nomeEspecialidade', $nomeEspecialidade);
        $stmt->execute();
        break;

    case "DELETE":
        $sql = "DELETE FROM tbEspecialidade WHERE idEspecialidade = :id";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $path[5]);
        $stmt->execute();
        break;
}
