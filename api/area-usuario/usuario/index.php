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
        $sql = "SELECT * FROM tbUsuario";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $user = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode($user);
        break;

    case "POST":
        $nomeUsuario = $_POST['nomeUsuario'];
        $dtNasctoUsuario = $_POST['dtNasctoUsuario'];
        $senhaUsuario = $_POST['senhaUsuario'];
        $cpfUsuario = $_POST['cpfUsuario'];
        $numTelefone = $_POST['numTelefone'];
        
        $sql = "INSERT INTO tbUsuario(idUsuario, nomeUsuario, dtNasctoUsuario, senhaUsuario, cpfUsuario) VALUES(null, :nomeUsuario, :dtNasctoUsuario, :senhaUsuario, :cpfUsuario)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':nomeUsuario', $nomeUsuario);
        $stmt->bindParam(':dtNasctoUsuario', $dtNasctoUsuario);
        $stmt->bindParam(':senhaUsuario', $senhaUsuario);
        $stmt->bindParam(':cpfUsuario', $cpfUsuario);
        $stmt->execute();
        $lastUserId = $conn->lastInsertId();

        $sql = "INSERT INTO tbTelefone(idTelefone, numTelefone, idUsuario) VALUES(null, :numTelefone, :idUsuario)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':numTelefone', $numTelefone);
        $stmt->bindParam(':idUsuario', $lastUserId);
        $stmt->execute();
        break;

    case "PUT":
        $nomeUsuario = $_GET['nomeUsuario'];
        $dtNasctoUsuario = $_GET['dtNasctoUsuario'];
        $senhaUsuario = $_GET['senhaUsuario'];
        $numTelefone = $_GET['numTelefone'];
        $idUsuario = $_GET['idUsuario'];
        $idTelefone = $_GET['idTelefone'];
        
        $sql = "UPDATE tbUsuario SET nomeUsuario =:nomeUsuario, dtNasctoUsuario =:dtNasctoUsuario, senhaUsuario =:senhaUsuario WHERE idUsuario =:idUsuario";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':nomeUsuario', $nomeUsuario);
        $stmt->bindParam(':dtNasctoUsuario', $dtNasctoUsuario);
        $stmt->bindParam(':senhaAdmin', $senhaAdmin);
        $stmt->bindParam(':idUsuario', $idUsuario);
        $stmt->execute();

        $sql = "UPDATE tbTelefone SET numTelefone = :numTelefone WHERE idTelefone = :idTelefone";
        $stmt = $conn->prepare($sql);
        $stmt->bindValue(':numTelefone', $numTelefone);
        $stmt->bindValue(':idTelefone', $idTelefone);
        $stmt->execute();
        break;

    case "DELETE":
        $idUsuario = $_GET['idUsuario'];
        $idTelefone = $_GET['idTelefone'];

        $sql = "DELETE FROM tbUsuario WHERE idUsuario = :idUsuario";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':idUsuario', $idUsuario);
        $stmt->execute();

        $sql = "DELETE FROM tbTelefone WHERE idTelefone = :idTelefone";
        $stmt = $conn->prepare($sql);
        $stmt->bindValue(':idTelefone', $idTelefone);
        $stmt->execute();
        break;
}
?>