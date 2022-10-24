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
        $sql = "SELECT * FROM tbPlantao";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if (isset($path[4]) && is_numeric($path[4])) {
            $sql .= " SELECT m.idPlantao, m.tipoPlantao, DATE_FORMAT(m.inicioPlantao,'%d/%m/%Y %H:%i') AS inicioPlantao, DATE_FORMAT(m.fimPlantao,'%d/%m/%Y %H:%i') AS fimPlantao ,e.nomeMedico, e.idMedico 
            FROM tbPlantao m
            INNER JOIN tbMedico e
            ON m.idMedico = e.idMedico";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[4]);
            $stmt->execute();
            $plantao = $stmt->fetchAll(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $plantao = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($plantao);
        break;

    case "POST":
        $plantao = json_decode( file_get_contents('php://input') );
        $sql = "INSERT INTO tbPlantao(idPlantao, tipoPlantao, inicioPlantao, fimPlantao, idhospital) VALUES(null, :tipoPlantao, :inicioPlantao, :fimPlantao, :idHospital)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':tipoPlantao', $plantao->tipoPlantao);
        $stmt->bindParam(':inicioPlantao', $plantao->inicioPlantao);
        $stmt->bindParam(':fimPlantao', $plantao->fimPlantao);
        $stmt->bindParam(':idHospital', $especialidade->idHospital);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Plantão cadastrado com sucesso'];
        } else {
            $response = ['status' => 0, 'message' => 'Falha em cadastrar o plantão'];
        }
        
        echo json_encode($response);
        break;

    case "PUT":
        $plantao = json_decode( file_get_contents('php://input') );
        $sql = "UPDATE tbPlantao SET tipoPlantao= :tipoPlantao, inicioPlantao = :inicioPlantao, fimPlantao = fimPlantao WHERE idPlantao = :idPlantao";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':idPlantao', $plantao->idPlantao);
        $stmt->bindParam(':tipoPlantao', $plantao->tipoPlantao);
        $stmt->bindParam(':inicioPlantao', $plantao->inicioPlantao);
        $stmt->bindParam(':fimPlantao', $plantao->fimPlantao);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Plantão alterado com sucesso.'];
        } else {
            $response = ['status' => 0, 'message' => 'Falha em alterar o plantão.'];
        }

        echo json_encode($response);
        break;

    case "DELETE":
        $sql = "DELETE FROM tbPlantao WHERE idPlantao = :idPlantao";
        $path = explode('/', $_SERVER['REQUEST_URI']);

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':idPlantao', $path[3]);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Plantão exluído com sucesso.'];
        } else {
            $response = ['status' => 0, 'message' => 'Falha na exclusão do plantão.'];
        }

        echo json_encode($response);
        break;
}
?>