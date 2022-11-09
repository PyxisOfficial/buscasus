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
            WHERE nomeEspecialidade LIKE '%$search%'";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $especialidade = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($especialidade);
} else {
    $sql = "SELECT idEspecialidade, nomeEspecialidade FROM tbEspecialidade";
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
        $idEspecialidade = $_GET['idEspecialidade'];

        $sql = "DELETE FROM tbEspecialidade WHERE idEspecialidade = :id";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $idEspecialidade);
        $stmt->execute();
        break;
}
?>