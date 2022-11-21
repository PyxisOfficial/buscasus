<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include '../../Connection.php';
$connection = new Connection;
$conn = $connection->connect();

if (isset($_GET['search'])) {
    $search = $_GET['search'];

    $sql = "SELECT * FROM tbUsuario WHERE nomeUsuario LIKE '%$search%' ORDER BY nomeUsuario ASC";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $usuario = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($usuario);

} else if (isset($_GET['count'])) {
    $sql = "SELECT COUNT(idUsuario) AS idUsuario FROM tbUsuario";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

    echo json_encode($usuario);

} else if (isset($_GET['repeatedCpf'])) {

    $repeatedCpf = @$_GET['repeatedCpf'];

    $sql = "SELECT COUNT(idUsuario) AS idUsuario FROM tbUsuario WHERE cpfUsuario LIKE :cpf";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':cpf', $repeatedCpf);
    $stmt->execute();
    $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

    echo json_encode($usuario);

} else {
    $sql = "SELECT * FROM tbUsuario ORDER BY nomeUsuario ASC";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $usuario = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($usuario);
}

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "POST":
        $nomeUsuario = $_POST['nomeUsuario'];
        $emailUsuario = $_POST['emailUsuario'];
        $senhaUsuario = $_POST['senhaUsuario'];
        $cpfUsuario = $_POST['cpfUsuario'];
        
        $sql = "INSERT INTO tbUsuario(idUsuario, nomeUsuario, emailUsuario, senhaUsuario, cpfUsuario) VALUES(null, :nomeUsuario, :emailUsuario, :senhaUsuario, :cpfUsuario)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':nomeUsuario', $nomeUsuario);
        $stmt->bindParam(':emailUsuario', $emailUsuario);
        $stmt->bindParam(':senhaUsuario', $senhaUsuario);
        $stmt->bindParam(':cpfUsuario', $cpfUsuario);
        $stmt->execute();
        break;

    case "PUT":
        $nomeUsuario = $_GET['nomeUsuario'];
        $emailUsuario = $_GET['emailUsuario'];
        $senhaUsuario = $_GET['senhaUsuario'];
        $idUsuario = $_GET['idUsuario'];
        
        $sql = "UPDATE tbUsuario SET nomeUsuario =:nomeUsuario, emailUsuario =:emailUsuario, senhaUsuario =:senhaUsuario WHERE idUsuario =:idUsuario";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':nomeUsuario', $nomeUsuario);
        $stmt->bindParam(':emailUsuario', $emailUsuario);
        $stmt->bindParam(':senhaAdmin', $senhaAdmin);
        $stmt->bindParam(':idUsuario', $idUsuario);
        $stmt->execute();
        break;

    case "DELETE":
        $idUsuario = $_GET['idUsuario'];

        $sql = "DELETE FROM tbUsuario WHERE idUsuario = :idUsuario";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':idUsuario', $idUsuario);
        $stmt->execute();
        break;
}
?>