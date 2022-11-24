<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include '../../Connection.php';
$connection = new Connection;
$conn = $connection->connect();

if (isset($_GET['search'])) {

    $search = $_GET['search'];

    $sql = "SELECT idEspecialidade, nomeEspecialidade FROM tbEspecialidade
            WHERE nomeEspecialidade LIKE '%$search%' AND idEspecialidade > 1
            ORDER BY nomeEspecialidade ASC";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $especialidade = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($especialidade);

} else if (isset($_GET['repeatedSpecialty'])) {

    $repeatedSpecialty = @$_GET['repeatedSpecialty'];

    $sql = "SELECT COUNT(idEspecialidade) AS idEspecialidade FROM tbEspecialidade WHERE nomeEspecialidade LIKE :nomeEspecialidade";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':nomeEspecialidade', $repeatedSpecialty);
    $stmt->execute();
    $especialidade = $stmt->fetch(PDO::FETCH_ASSOC);

    echo json_encode($especialidade);

} else if (isset($_GET['allSpeciaty'])) {

    $sql = "SELECT * FROM tbEspecialidade ORDER BY nomeEspecialidade ASC";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $especialidade = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($especialidade);

} else {

    $sql = "SELECT * FROM tbEspecialidade WHERE idEspecialidade > 1 ORDER BY nomeEspecialidade ASC";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $especialidade = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($especialidade);
    
}

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "POST":
        $nomeEspecialidade = $_POST['nomeEspecialidade'];

        $sql = "INSERT INTO tbEspecialidade(idEspecialidade, nomeEspecialidade) VALUES(null, :nomeEspecialidade)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':nomeEspecialidade', $nomeEspecialidade);
        $stmt->execute();
        break;

    case "DELETE":
        $idEspecialidade = $_GET['idEspecialidade'];

        $sql = "DELETE FROM tbEspecialidade WHERE idEspecialidade = :id";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $idEspecialidade);
        $stmt->execute();
        break;
}
?>