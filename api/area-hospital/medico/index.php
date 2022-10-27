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
        $sql = "SELECT * FROM tbMedico";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if (isset($path[5]) && is_numeric($path[5])) {
            $sql = "SELECT m.idMedico, m.nomeMedico , m.cpfMedico , m.crmMedico , m.fotoMedico , m.fotoMedico , e.nomeEspecialidade FROM tbMedico m     
                    INNER JOIN tbEspecialidade e 
                    ON m.idEspecialidade = e.idEspecialidade 
                    WHERE m.idHospital = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[5]);
            $stmt->execute();
            $medico = $stmt->fetchAll(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $medico = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($medico);
        break;

    case "POST":
        $medico = json_decode( file_get_contents('php://input') );
        $sql = "INSERT INTO tbMedico(idMedico, nomeMedico, cpfMedico, crmMedico, fotoMedico, idEspecialidade, idHospital) VALUES(null, :nomeMedico, :cpfMedico, :crmMedico, :fotoMedico, :idEspecialidade, :idHospital)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':nomeMedico', $medico->nomeMedico);
        $stmt->bindParam(':cpfMedico', $medico->cpfMedico);
        $stmt->bindParam(':crmMedico', $medico->crmMedico);
        $stmt->bindParam(':fotoMedico', $medico->fotoMedico);
        $stmt->bindParam(':idEspecialidade', $medico->idEspecialidade);
        $stmt->bindParam(':idHospital', $medico->idHospital);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Médico cadastrado com sucesso'];
        } else {
            $response = ['status' => 0, 'message' => 'Falha em cadastrar o médico'];
        }

        echo json_encode($response);
        break;

    case "PUT":
        $medico = json_decode( file_get_contents('php://input') );
        $sql = "UPDATE tbMedico SET nomeMedico= :nomeMedico, cpfMedico =:cpfMedico, fotoMedico =:fotoMedico, idEspecialidade =:idEspecialidade, idHospital =:idHospital WHERE idMedico = :idMedico";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':nomeMedico', $medico->nomeMedico);
        $stmt->bindParam(':cpfMedico', $medico->cpfMedico);
        $stmt->bindParam(':crmMedico', $medico->crmMedico);
        $stmt->bindParam(':idEspecialidade', $medico->idEspecialidade);
        $stmt->bindParam(':idHospital', $medico->idHospital);
        $stmt->bindParam(':idMedico', $path[4]);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Médico alterado com sucesso.'];
        } else {
            $response = ['status' => 0, 'message' => 'Falha em alterar o médico.'];
        }

        echo json_encode($response);
        break;

    case "DELETE":
        $sql = "DELETE FROM tbMedico WHERE idMedico = :id";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $path[5]);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Médico exluído com sucesso.'];
        } else {
            $response = ['status' => 0, 'message' => 'Falha na exclusão do médico.'];
        }
        
        echo json_encode($response);
        break;
}
?>