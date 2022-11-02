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
        if (isset($path[5]) && is_numeric($path[5])) {
            $sql .= " WHERE idHospital = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[5]);
            $stmt->execute();
            $hospital = $stmt->fetchAll(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $hospital = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($hospital);
        break;

    case "DELETE":
        $sql = "DELETE FROM tbHospital WHERE idHospital = :id";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $path[5]);
        $stmt->execute();
        break;
}

if ($_SERVER['REQUEST_METHOD'] == "POST" && !isset($_GET['nomeMedico'])) {
    $nomeHospital = $_POST['nomeHospital'];
    $emailHospital = $_POST['emailHospital'];
    $numTelefone = $_POST['numTelefone'];
    $aberturaHospital = $_POST['aberturaHospital'];
    $fechamentoHospital = $_POST['fechamentoHospital'];
    $cnpjHospital = $_POST['cnpjHospital'];
    $ufHospital = $_POST['ufHospital'];
    $logradouroHospital = $_POST['logradouroHospital'];
    $complementoHospital = $_POST['complementoHospital'];
    $cepHospital = $_POST['cepHospital'];
    $cidadeHospital = $_POST['cidadeHospital'];
    $bairroHospital = $_POST['bairroHospital'];
    $fotoHospital = $_POST['fotoHospital'];
    
    $sql = "INSERT INTO tbHospital(idHospital, nomeHospital, emailHospital, aberturaHospital, fechamentoHospital, cnpjHospital, ufHospital, logradouroHospital, complementoHospital, cepHospital, cidadeHospital, bairroHospital, fotoHospital) VALUES(null, :nomeHospital, :emailHospital, :aberturaHospital, :fechamentoHospital, :cnpjHospital, :ufHospital, :logradouroHospital, :complementoHospital, :cepHospital, :cidadeHospital, :bairroHospital, :fotoHospital)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':nomeHospital', $nomeHospital);
    $stmt->bindParam(':emailHospital', $emailHospital);
    $stmt->bindParam(':aberturaHospital', $aberturaHospital);
    $stmt->bindParam(':fechamentoHospital', $fechamentoHospital);
    $stmt->bindParam(':cnpjHospital', $cnpjHospital);
    $stmt->bindParam(':ufHospital', $ufHospital);
    $stmt->bindParam(':logradouroHospital', $logradouroHospital);
    $stmt->bindParam(':complementoHospital', $complementoHospital);
    $stmt->bindParam(':cepHospital', $cepHospital);
    $stmt->bindParam(':cidadeHospital', $cidadeHospital);
    $stmt->bindParam(':bairroHospital', $bairroHospital);
    $stmt->bindParam(':fotoHospital', $fotoHospital);
    $stmt->execute();
    $lastIdHosp = $conn->lastInsertId();

    $sql = "INSERT INTO tbTelefone(idTelefone, numTelefone, idHospital) VALUES(null, :numTelefone, :idHospital)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':numTelefone', $numTelefone);
    $stmt->bindParam(':idHospital', $lastIdHosp);
    $stmt->execute();

    $files = $_FILES['picture'];
    $filename = $files['name'];
    $templocation = $files['tmp_name'];
    $file_destination = '../img/' . $filename;
    move_uploaded_file($templocation, $file_destination);
}

if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_GET['nomeMedico'])) {
    $nomeHospital = $_GET['nomeHospital'];
    $emailHospital = $_GET['emailHospital'];
    $numTelefone = $_GET['numTelefone'];
    $aberturaHospital = $_GET['aberturaHospital'];
    $fechamentoHospital = $_GET['fechamentoHospital'];
    $cnpjHospital = $_GET['cnpjHospital'];
    $ufHospital = $_GET['ufHospital'];
    $logradouroHospital = $_GET['logradouroHospital'];
    $complementoHospital = $_GET['complementoHospital'];
    $cepHospital = $_GET['cepHospital'];
    $cidadeHospital = $_GET['cidadeHospital'];
    $bairroHospital = $_GET['bairroHospital'];
    $fotoHospital = $_GET['fotoHospital'];
    $idHospital = $_GET['idHospital'];
    $idTelefone = $_GET['idTelefone'];
    
    $sql = "UPDATE tbHospital SET nomeHospital = :nomeHospital, emailHospital = :emailHospital, aberturaHospital = :aberturaHospital, fechamentoHospital = :fechamentoHospital, ufHospital = :ufHospital, logradouroHospital = :logradouroHospital, complementoHospital = :complementoHospital, cepHospital = :cepHospital cidadeHospital = :cidadeHospital, bairroHospital = :bairroHospital fotoHospital = :fotoHospital WHERE idHospital = :idHospital";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':nomeHospital', $nomeHospital);
    $stmt->bindParam(':emailHospital', $emailHospital);
    $stmt->bindParam(':aberturaHospital', $aberturaHospital);
    $stmt->bindParam(':fechamentoHospital', $fechamentoHospital);
    $stmt->bindParam(':cnpjHospital', $cnpjHospital);
    $stmt->bindParam(':ufHospital', $ufHospital);
    $stmt->bindParam(':logradouroHospital', $logradouroHospital);
    $stmt->bindParam(':complementoHospital', $complementoHospital);
    $stmt->bindParam(':cepHospital', $cepHospital);
    $stmt->bindParam(':cidadeHospital', $cidadeHospital);
    $stmt->bindParam(':bairroHospital', $bairroHospital);
    $stmt->bindParam(':fotoHospital', $fotoHospital);
    $stmt->bindParam(':idHospital', $idHospital);
    $stmt->execute();

    $sql = "UPDATE tbTelefone SET numTelefone = :numTelefone WHERE idTelefone = :idTelefone";
    $stmt = $conn->prepare($sql);
    $stmt->bindValue(':numTelefone', $numTelefone);
    $stmt->bindValue(':idTelefone', $telefone);

    $files = $_FILES['picture'];
    $filename = $files['name'];
    $templocation = $files['tmp_name'];
    $file_destination = '../img/' . $filename;
    move_uploaded_file($templocation, $file_destination);
}
?>