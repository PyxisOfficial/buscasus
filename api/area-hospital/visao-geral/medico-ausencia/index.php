<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include '../../../Connection.php';
$connection = new Connection;
$conn = $connection->connect();

$idHospital = @$_GET['idHospital'];

$sql = "SELECT COUNT(idPlantao) AS ausenciasMedico, MONTH(NOW())-1 AS mes FROM tbPlantao WHERE (presencaMedico = 0 AND idHospital = :idHospital) AND (MONTH(dataPlantao) = (MONTH(NOW())-1))";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':idHospital', $idHospital);
$stmt->execute();
$faltaMedico1 = $stmt->fetch(PDO::FETCH_ASSOC);

$sql = "SELECT COUNT(idPlantao) AS ausenciasMedico, MONTH(NOW())-2 AS mes FROM tbPlantao WHERE (presencaMedico = 0 AND idHospital = :idHospital) AND (MONTH(dataPlantao) = (MONTH(NOW())-2))";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':idHospital', $idHospital);
$stmt->execute();
$faltaMedico2 = $stmt->fetch(PDO::FETCH_ASSOC);

$sql = "SELECT COUNT(idPlantao) AS ausenciasMedico, MONTH(NOW())-3 AS mes FROM tbPlantao WHERE (presencaMedico = 0 AND idHospital = :idHospital) AND (MONTH(dataPlantao) = (MONTH(NOW())-3))";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':idHospital', $idHospital);
$stmt->execute();
$faltaMedico3 = $stmt->fetch(PDO::FETCH_ASSOC);

$sql = "SELECT COUNT(idPlantao) AS ausenciasMedico, MONTH(NOW())-4 AS mes FROM tbPlantao WHERE (presencaMedico = 0 AND idHospital = :idHospital) AND (MONTH(dataPlantao) = (MONTH(NOW())-4))";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':idHospital', $idHospital);
$stmt->execute();
$faltaMedico4 = $stmt->fetch(PDO::FETCH_ASSOC);

$faltaMedico1 = json_encode($faltaMedico1);
$faltaMedico2 = json_encode($faltaMedico2);
$faltaMedico3 = json_encode($faltaMedico3);
$faltaMedico4 = json_encode($faltaMedico4);

$array = [json_decode($faltaMedico1), json_decode($faltaMedico2), json_decode($faltaMedico3), json_decode($faltaMedico4)];

echo json_encode($array);
?>