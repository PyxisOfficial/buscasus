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
                $stmt = $conn->prepare($sql);
                $stmt->execute();
                $admin = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
        echo json_encode($admin);
?>