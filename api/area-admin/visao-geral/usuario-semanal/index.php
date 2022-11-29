<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include '../../../Connection.php';
$connection = new Connection;
$conn = $connection->connect();

$sql = "SELECT COUNT(idUsuario) AS idUsuario from tbUsuario WHERE WEEK(dataUsuario)+1 = WEEK(CURDATE())";
$stmt = $conn->prepare($sql);
$stmt->execute();
$usuarioSemanal1 = $stmt->fetch(PDO::FETCH_ASSOC);

$sql = "SELECT COUNT(idUsuario) AS idUsuario from tbUsuario WHERE WEEK(dataUsuario)+2 = WEEK(CURDATE())";
$stmt = $conn->prepare($sql);
$stmt->execute();
$usuarioSemanal2 = $stmt->fetch(PDO::FETCH_ASSOC);

$sql = "SELECT COUNT(idUsuario) AS idUsuario from tbUsuario WHERE WEEK(dataUsuario)+3 = WEEK(CURDATE())";
$stmt = $conn->prepare($sql);
$stmt->execute();
$usuarioSemanal3 = $stmt->fetch(PDO::FETCH_ASSOC);

$sql = "SELECT COUNT(idUsuario) AS idUsuario from tbUsuario WHERE WEEK(dataUsuario)+4 = WEEK(CURDATE())";
$stmt = $conn->prepare($sql);
$stmt->execute();
$usuarioSemanal4 = $stmt->fetch(PDO::FETCH_ASSOC);

$usuarioSemanal1 = json_encode($usuarioSemanal1);
$usuarioSemanal2 = json_encode($usuarioSemanal2);
$usuarioSemanal3 = json_encode($usuarioSemanal3);
$usuarioSemanal4 = json_encode($usuarioSemanal4);

$array = [json_decode($usuarioSemanal1), json_decode($usuarioSemanal2), json_decode($usuarioSemanal3), json_decode($usuarioSemanal4)];

echo json_encode($array);
?>