<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include '../../Connection.php';
$connection = new Connection;
$conn = $connection->connect();

$sql = "SELECT COUNT(idMedico) AS idMedico FROM tbMedicoEspecialidade WHERE idEspecialidade = 2";
$stmt = $conn->prepare($sql);
$stmt->execute();
$idMedicoEspecialidade1 = $stmt->fetch(PDO::FETCH_ASSOC);

$sql = "SELECT COUNT(idMedico) AS idMedico FROM tbMedicoEspecialidade WHERE idEspecialidade = 3";
$stmt = $conn->prepare($sql);
$stmt->execute();
$idMedicoEspecialidade2 = $stmt->fetch(PDO::FETCH_ASSOC);

$sql = "SELECT COUNT(idMedico) AS idMedico FROM tbMedicoEspecialidade WHERE idEspecialidade = 4";
$stmt = $conn->prepare($sql);
$stmt->execute();
$idMedicoEspecialidade3 = $stmt->fetch(PDO::FETCH_ASSOC);

$sql = "SELECT COUNT(idMedico) AS idMedico FROM tbMedicoEspecialidade WHERE idEspecialidade = 5";
$stmt = $conn->prepare($sql);
$stmt->execute();
$idMedicoEspecialidade4 = $stmt->fetch(PDO::FETCH_ASSOC);

$sql = "SELECT COUNT(idMedico) AS idMedico FROM tbMedicoEspecialidade WHERE idEspecialidade = 6";
$stmt = $conn->prepare($sql);
$stmt->execute();
$idMedicoEspecialidade5 = $stmt->fetch(PDO::FETCH_ASSOC);

$sql = "SELECT COUNT(idMedico) AS idMedico FROM tbMedicoEspecialidade WHERE idEspecialidade = 7";
$stmt = $conn->prepare($sql);
$stmt->execute();
$idMedicoEspecialidade6 = $stmt->fetch(PDO::FETCH_ASSOC);

$sql = "SELECT COUNT(idMedico) AS idMedico FROM tbMedicoEspecialidade WHERE idEspecialidade = 8";
$stmt = $conn->prepare($sql);
$stmt->execute();
$idMedicoEspecialidade7 = $stmt->fetch(PDO::FETCH_ASSOC);

$sql = "SELECT COUNT(idMedico) AS idMedico FROM tbMedicoEspecialidade WHERE idEspecialidade = 9";
$stmt = $conn->prepare($sql);
$stmt->execute();
$idMedicoEspecialidade8 = $stmt->fetch(PDO::FETCH_ASSOC);

$sql = "SELECT COUNT(idMedico) AS idMedico FROM tbMedicoEspecialidade WHERE idEspecialidade = 10";
$stmt = $conn->prepare($sql);
$stmt->execute();
$idMedicoEspecialidade9 = $stmt->fetch(PDO::FETCH_ASSOC);

$sql = "SELECT COUNT(idMedico) AS idMedico FROM tbMedicoEspecialidade WHERE idEspecialidade = 11";
$stmt = $conn->prepare($sql);
$stmt->execute();
$idMedicoEspecialidade10 = $stmt->fetch(PDO::FETCH_ASSOC);

$sql = "SELECT COUNT(idMedico) AS idMedico FROM tbMedicoEspecialidade WHERE idEspecialidade = 12";
$stmt = $conn->prepare($sql);
$stmt->execute();
$idMedicoEspecialidade11 = $stmt->fetch(PDO::FETCH_ASSOC);

$sql = "SELECT COUNT(idMedico) AS idMedico FROM tbMedicoEspecialidade WHERE idEspecialidade = 13";
$stmt = $conn->prepare($sql);
$stmt->execute();
$idMedicoEspecialidade12 = $stmt->fetch(PDO::FETCH_ASSOC);

$especialidade1 = json_encode($idMedicoEspecialidade1);
$especialidade2 = json_encode($idMedicoEspecialidade2);
$especialidade3 = json_encode($idMedicoEspecialidade3);
$especialidade4 = json_encode($idMedicoEspecialidade4);
$especialidade5 = json_encode($idMedicoEspecialidade5);
$especialidade6 = json_encode($idMedicoEspecialidade6);
$especialidade7 = json_encode($idMedicoEspecialidade7);
$especialidade8 = json_encode($idMedicoEspecialidade8);
$especialidade9 = json_encode($idMedicoEspecialidade9);
$especialidade10 = json_encode($idMedicoEspecialidade10);
$especialidade11 = json_encode($idMedicoEspecialidade11);
$especialidade12 = json_encode($idMedicoEspecialidade12);

$array = [
    json_decode($especialidade1), json_decode($especialidade2), json_decode($especialidade3), json_decode($especialidade4), json_decode($especialidade5),
    json_decode($especialidade6), json_decode($especialidade7), json_decode($especialidade8), json_decode($especialidade9), json_decode($especialidade10),
    json_decode($especialidade11), json_decode($especialidade12)
];

echo json_encode($array);
?>