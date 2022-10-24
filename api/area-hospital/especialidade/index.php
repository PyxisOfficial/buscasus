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
        $sql = "SELECT * FROM tbEspecialidade";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if (isset($path[4]) && is_numeric($path[4])) {
            $sql .= " WHERE idHospital = :idHospital";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[4]);
            $stmt->execute();
            $especialidade = $stmt->fetchAll(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $especialidade = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($especialidade);
        break;

    case "POST":
        $especialidade = json_decode( file_get_contents('php://input') );
        $sql = "INSERT INTO tbEspecialidade(idEspecialidade, nomeEspecialidade, idHospital) VALUES(null, :nomeEspecialidade, :idHospital)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':nomeEspecialidade', $especialidade->nomeEspecialidade);
        $stmt->bindParam(':idHospital', $especialidade->idHospital);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Especialidade cadastrada com sucesso'];
        } else {
            $response = ['status' => 0, 'message' => 'Falha em cadastrar a especialidade'];
        }

        echo json_encode($response);
        break;

    case "PUT":
        $especialidade = json_decode( file_get_contents('php://input') );
        $sql = "UPDATE tbEspecialidade SET nomeEspecialidade= :nomeEspecialidade WHERE idEspecialidade = :idEspecialidade";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':idEspecialidade', $especialidade->idEspecialidade);
        $stmt->bindParam(':nomeEspecialidade', $especialidade->nomeEspecialidade);
        

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Especialidade alterada com sucesso.'];
        } else {
            $response = ['status' => 0, 'message' => 'Falha em alterar a Especialidade.'];
        }

        echo json_encode($response);
        break;

    case "DELETE":
        $sql = "DELETE FROM tbEspecialidade WHERE idEspecialidade = :idEspecialidade";
        $path = explode('/', $_SERVER['REQUEST_URI']);

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':idEspecialidade', $path[3]);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Especialidade exluída com sucesso.'];
        } else {
            $response = ['status' => 0, 'message' => 'Falha na exclusão da especialidade.'];
        }

        echo json_encode($response);
        break;
}
?>