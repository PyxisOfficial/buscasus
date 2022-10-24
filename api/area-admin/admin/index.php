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
        $sql = "SELECT * FROM tbAdmin";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if (isset($path[4]) && is_numeric($path[4])) {
            $sql .= " WHERE idHospital = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[4]);
            $stmt->execute();
            $admin = $stmt->fetchAll(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $admin = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($admin);
        break;

    case "POST":
        $admin = json_decode( file_get_contents('php://input') );
        $sql = "INSERT INTO tdAdmin(idAdmin, loginAdmin, senhaAdmin, tipoAdmin, idHospital) VALUES(null, :loginAdmin, :senhaAdmin, :tipoAdmin, :idHospital)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':loginAdmin', $admin->loginAdmin);
        $stmt->bindParam('senhaAdmin:', $admin->senhaAdmin);
        $stmt->bindParam(':tipoAdmin', $admin->senhaAdmin);
        $stmt->bindParam(':idHospital', $admin->idHospital);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Admin cadastrado com sucesso'];
        } else {
            $response = ['status' => 0, 'message' => 'Falha em cadastrar o admin'];
        }

        echo json_encode($response);
        break;

    case "PUT":
        $admin = json_decode( file_get_contents('php://input') );
        $sql = "UPDATE tbAdmin SET loginAdmin= :loginAdmin, senhaAdmin =:senhaAdmin, tipoAdmin =:tipoAdmin, idHospital =:idHospital WHERE idAdmin = :idAdmin";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':loginAdmin', $admin->loginAdmin);
        $stmt->bindParam(':senhaAdmin', $admin->senhaAdmin);
        $stmt->bindParam(':tipoAdmin', $admin->tipoAdmin);
        $stmt->bindParam(':idHospital', $admin->idHospital);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Admin alterado com sucesso.'];
        } else {
            $response = ['status' => 0, 'message' => 'Falha em alterar o admin.'];
        }

        echo json_encode($response);
        break;

    case "DELETE":
        $sql = "DELETE FROM tbAdmin WHERE idAdmin = :idAdmin";
        $path = explode('/', $_SERVER['REQUEST_URI']);

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':idAdmin', $path[3]);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Admin exluído com sucesso.'];
        } else {
            $response = ['status' => 0, 'message' => 'Falha na exclusão do admin.'];
        }

        echo json_encode($response);
        break;
}
?>