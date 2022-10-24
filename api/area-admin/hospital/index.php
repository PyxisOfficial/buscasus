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
        $sql = "SELECT * FROM tbHospital";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if (isset($path[4]) && is_numeric($path[4])) {
            $sql .= " WHERE idHospital = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[4]);
            $stmt->execute();
            $hospital = $stmt->fetchAll(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $hospital = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($hospital);
        break;

    case "POST":
        $hospital = json_decode( file_get_contents('php://input') );
        $sql = "INSERT INTO tbHospital(idHospital, nomeHospital, emailHospital, idTelefone, numTelefone, aberturaHospital, fechamentoHospital, cnpjHospital, ufHospital, logradouroHospital, complementoHospital, cepHospital, cidadeHospital, bairroHospital, fotoHospital) VALUES(null, :nomeHospital, :emailHospital, :idTelefone, :numTelefone, :aberturaHospital, :fechamentoHospital, :cnpjHospital, :ufHospital, :logradouroHospital, :complementoHospital, :cepHospital, :cidadeHospital, :bairroHospital, :fotoHospital)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':nomeHospital', $hospital->nomeHospital);
        $stmt->bindParam(':emailHospital', $hospital->emailHospital);
        $stmt->bindParam(':idTelefone', $hospital->idTelefone);
        $stmt->bindParam(':numTelefone', $hospital->numTelefone);
        $stmt->bindParam(':aberturaHospital', $hospital->aberturaHospital);
        $stmt->bindParam(':fechamentoHospital', $hospital->fechamentoHospital);
        $stmt->bindParam(':cnpjHospital', $hospital->cnpjHospital);
        $stmt->bindParam(':ufHospital', $hospital->ufHospital);
        $stmt->bindParam(':logradouroHospital', $hospital->logradouroHospital);
        $stmt->bindParam(':complementoHospital', $hospital->complementoHospital);
        $stmt->bindParam(':cepHospital', $hospital->cepHospital);
        $stmt->bindParam(':cidadeHospital', $hospital->cidadeHospital);
        $stmt->bindParam(':bairroHospital', $hospital->bairroHospital);
        $stmt->bindParam(':fotoHospital', $hospital->fotoHospital);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Hospital cadastrado com sucesso'];
        } else {
            $response = ['status' => 0, 'message' => 'Falha em cadastrar o Hospital'];
        }

        echo json_encode($response);
        break;

    case "PUT":
        $hospital = json_decode( file_get_contents('php://input') );
        $sql = "UPDATE tbHospital SET nomeHospital = :nomeHospital, emailHospital = :emailHospital, idTelefone = :idTelefone, numTelefone = :numTelefone, aberturaHospital = :aberturaHospital, fechamentoHospital = :fechamentoHospital, ufHospital = :ufHospital, logradouroHospital = :logradouroHospital, complementoHospital = :complementoHospital, cepHospital = :cepHospital cidadeHospital = :cidadeHospital, bairroHospital = :bairroHospital fotoHospital = :fotoHospital WHERE idHospital = :id";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':nomeHospital', $hospital->nomeHospital);
        $stmt->bindParam(':emailHospital', $hospital->emailHospital);
        $stmt->bindParam(':idTelefone', $hospital->idTelefone);
        $stmt->bindParam(':numTelefone', $hospital->numTelefone);
        $stmt->bindParam(':aberturaHospital', $hospital->aberturaHospital);
        $stmt->bindParam(':fechamentoHospital', $hospital->fechamentoHospital);
        $stmt->bindParam(':ufHospital', $hospital->ufHospital);
        $stmt->bindParam(':logradouroHospital', $hospital->logradouroHospital);
        $stmt->bindParam(':complementoHospital', $hospital->complementoHospital);
        $stmt->bindParam(':cepHospital', $hospital->cepHospital);
        $stmt->bindParam(':cidadeHospital', $hospital->cidadeHospital);
        $stmt->bindParam(':bairroHospital', $hospital->bairroHospital);
        $stmt->bindParam(':fotoHospital', $hospital->fotoHospital);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Hospital alterado com sucesso.'];
        } else {
            $response = ['status' => 0, 'message' => 'Falha em alterar o hospital.'];
        }

        echo json_encode($response);
        break;

    case "DELETE":
        $sql = "DELETE FROM tbHospital WHERE idHospital = :id";
        $path = explode('/', $_SERVER['REQUEST_URI']);

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $path[4]);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Hospital exluído com sucesso.'];
        } else {
            $response = ['status' => 0, 'message' => 'Falha na exclusão do hospital.'];
        }
        
        echo json_encode($response);
        break;
}
?>