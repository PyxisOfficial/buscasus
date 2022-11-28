<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include '../../Connection.php';
$connection = new Connection;
$conn = $connection->connect();

if (isset($_GET['search'])) {

    $search = $_GET['search'];

    $sql = "SELECT a.idAdmin, a.loginAdmin, a.senhaAdmin, a.primeiroAcesso, a.idHospital, h.nomeHospital FROM tbAdmin a
    INNER JOIN tbHospital h
    ON a.idHospital = h.idHospital
    WHERE (a.loginAdmin LIKE '%$search%' AND a.tipoAdmin != 1) 
    OR (a.idAdmin LIKE '%$search%' AND a.tipoAdmin != 1)
    OR (h.nomeHospital LIKE '%$search%' AND a.tipoAdmin != 1)
    ORDER BY a.primeiroAcesso DESC";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $admin = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($admin);

} else if (isset($_GET['userLogin'])) {

    $idHospital = @$_GET['idHospital'];

    $sql = "SELECT emailHospital FROM tbHospital WHERE idHospital = :idHospital";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':idHospital', $idHospital);
    $stmt->execute();
    $admin = $stmt->fetch(PDO::FETCH_ASSOC);

    echo json_encode($admin);

} else if (isset($_GET['repeatedAdmin'])) {

    $idHospital = @$_GET['idHospital'];

    $sql = "SELECT COUNT(idAdmin) AS idAdmin FROM tbAdmin WHERE idHospital = :idHospital";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':idHospital', $idHospital);
    $stmt->execute();
    $admin = $stmt->fetch(PDO::FETCH_ASSOC);

    echo json_encode($admin);

} else {

    $sql = "SELECT a.idAdmin, a.loginAdmin, a.senhaAdmin, a.primeiroAcesso,a.idHospital, h.nomeHospital FROM tbAdmin a
    INNER JOIN tbHospital h
    ON a.idHospital = h.idHospital
    WHERE tipoAdmin != 1
    ORDER BY a.primeiroAcesso DESC";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $admin = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($admin);
}

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "POST":
        $loginAdmin = $_POST['loginAdmin'];
        $senhaAdmin = $_POST['senhaAdmin'];
        $tipoAdmin = '0';
        $primeiroAcesso = '1';
        $idHospital = $_POST['idHospital'];

        $sql = "INSERT INTO tbAdmin(idAdmin, loginAdmin, senhaAdmin, tipoAdmin, primeiroAcesso, idHospital) VALUES(null, :loginAdmin, :senhaAdmin, :tipoAdmin, :primeiroAcesso, :idHospital)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':loginAdmin', $loginAdmin);
        $stmt->bindParam(':senhaAdmin', $senhaAdmin);
        $stmt->bindParam(':tipoAdmin', $tipoAdmin);
        $stmt->bindParam(':primeiroAcesso', $primeiroAcesso);
        $stmt->bindParam(':idHospital', $idHospital);
        $stmt->execute();
        break;

    case "PUT":
        $senhaAdmin = $_GET['senhaAdmin'];
        $idAdmin = $_GET['idAdmin'];
        $primeiroAcesso = '0';

        $sql = "UPDATE tbAdmin SET senhaAdmin = :senhaAdmin, primeiroAcesso = :primeiroAcesso WHERE idAdmin = :idAdmin";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':senhaAdmin', $senhaAdmin);
        $stmt->bindParam(':primeiroAcesso', $primeiroAcesso);
        $stmt->bindParam(':idAdmin', $idAdmin);
        $stmt->execute();
        
        break;

    case "DELETE":
        $idAdmin = $_GET['idAdmin'];

        $sql = "DELETE FROM tbAdmin WHERE idAdmin = :idAdmin";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':idAdmin', $idAdmin);
        $stmt->execute();
        break;
}
?>