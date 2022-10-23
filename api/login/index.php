<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");
    
    include '../Connection.php';
    $connection = new Connection;
    $conn = $connection->connect();
    
    $method = $_SERVER['REQUEST_METHOD'];
    switch($method) {
        case "GET":
            $sql = "SELECT * FROM tbAdmin";
            $path = explode('/', $_SERVER['REQUEST_URI']);
            if(isset($path[4]) && is_numeric($path[4])) {
                $sql = "SELECT h.nomeHospital FROM tbAdmin a   
                        INNER JOIN tbHospital h 
                        ON a.idHospital = h.idHospital 
                        WHERE a.idHospital = :id";
                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':id', $path[4]);
                $stmt->execute();
                $admin = $stmt->fetch(PDO::FETCH_ASSOC);
            } else {
                $stmt = $conn->prepare($sql);
                $stmt->execute();
                $admin = $stmt->fetchAll(PDO::FETCH_ASSOC);
            }
        }
        echo json_encode($admin);
?>