<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include '../../Connection.php';
$connection = new Connection;
$conn = $connection->connect();

if (isset($_GET['search'])) {
    $search = $_GET['search'];
    $idHospital = @$_GET['idHospital'];

    $sql = "SELECT p.idPlantao, DATE_FORMAT(p.dataPlantao, '%d/%m/%Y') AS dataPlantao, DATE_FORMAT(p.inicioPlantao, '%H:%i') AS inicioPlantao, DATE_FORMAT(p.fimPlantao,'%H:%i') AS fimPlantao, m.nomeMedico, m.idMedico, t.idTipoPlantao, t.tipoPlantao 
    FROM tbPlantao p
    INNER JOIN tbMedico m
    ON p.idMedico = m.idMedico
    INNER JOIN tbTipoPlantao t
    ON p.idTipoPlantao = t.idTipoPlantao
    WHERE m.nomeMedico LIKE '%$search%' AND p.idHospital = :id";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':id', $idHospital);
    $stmt->execute();
    $plantao = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($plantao);
} else {
    $idHospital = @$_GET['idHospital'];

    $sql = "SELECT p.idPlantao, DATE_FORMAT(p.dataPlantao, '%d/%m/%Y') AS dataPlantao, DATE_FORMAT(p.inicioPlantao, '%H:%i') AS inicioPlantao, DATE_FORMAT(p.fimPlantao,'%H:%i') AS fimPlantao ,m.nomeMedico, m.idMedico, t.idTipoPlantao, t.tipoPlantao
    FROM tbPlantao p
    INNER JOIN tbMedico m
    ON p.idMedico = m.idMedico
    INNER JOIN tbTipoPlantao t
    ON p.idTipoPlantao = t.idTipoPlantao
    WHERE p.idHospital = :id";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':id', $idHospital);
    $stmt->execute();
    $plantao = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($plantao);
}

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "POST":
        $dataPlantao = $_POST['dataPlantao'];
        $inicioPlantao = $_POST['inicioPlantao'];
        $fimPlantao = $_POST['fimPlantao'];
        $idTipoPlantao = $_POST['idTipoPlantao'];
        $idMedico = $_POST['idMedico'];
        $idHospital = $_POST['idHospital'];
        
        $sql = "INSERT INTO tbPlantao(idPlantao, dataPlantao, inicioPlantao, fimPlantao, idTipoPlantao, idMedico, idHospital) VALUES(null, :dataPlantao, :inicioPlantao, :fimPlantao, :idTipoPlantao, :idMedico, :idHospital)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':dataPlantao', $dataPlantao);
        $stmt->bindParam(':inicioPlantao', $inicioPlantao);
        $stmt->bindParam(':fimPlantao', $fimPlantao);
        $stmt->bindParam(':idTipoPlantao', $idTipoPlantao);
        $stmt->bindParam(':idMedico', $idMedico);
        $stmt->bindParam(':idHospital', $idHospital);
        $stmt->execute();
        break;

    case "PUT":
        $idPlantao = $_GET['idPlantao'];
        $dataPlantao = $_GET['dataPlantao'];
        $inicioPlantao = $_GET['inicioPlantao'];
        $fimPlantao = $_GET['fimPlantao'];
        $idTipoPlantao = $_GET['idTipoPlantao'];
        $idMedico = $_GET['idMedico'];

        $sql = "UPDATE tbPlantao SET dataPlantao= :dataPlantao, inicioPlantao = :inicioPlantao, fimPlantao = :fimPlantao, idTipoPlantao = :idTipoPlantao, idMedico = :idMedico WHERE idPlantao = :idPlantao";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':idPlantao', $idPlantao);
        $stmt->bindParam(':dataPlantao', $dataPlantao);
        $stmt->bindParam(':inicioPlantao', $inicioPlantao);
        $stmt->bindParam(':fimPlantao', $fimPlantao);
        $stmt->bindParam(':idTipoPlantao', $idTipoPlantao);
        $stmt->bindParam(':idMedico', $idMedico);
        $stmt->execute();
        break;

    case "DELETE":
        $idPlantao = $_GET['idPlantao'];

        $sql = "DELETE FROM tbPlantao WHERE idPlantao = :idPlantao";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':idPlantao', $idPlantao);
        $stmt->execute();
        break;
}
?>