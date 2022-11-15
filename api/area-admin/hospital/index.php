<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include '../../Connection.php';
$connection = new Connection;
$conn = $connection->connect();

if (isset($_GET['search'])) {
    $search = $_GET['search'];

    $sql = "SELECT h.idHospital, h.nomeHospital, h.emailHospital, t.idTelefone, t.numTelefone, DATE_FORMAT(h.aberturaHospital, '%H:%i') AS aberturaHospital, DATE_FORMAT(h.fechamentoHospital, '%H:%i') AS fechamentoHospital, h.cnpjHospital, h.ufHospital, h.logradouroHospital, h.complementoHospital, h.cepHospital , h.cidadeHospital, h.bairroHospital, h.fotoHospital FROM tbHospital h
    INNER JOIN tbTelefone t
    ON h.idHospital = t.idHospital
    WHERE h.nomeHospital LIKE '%$search%'";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $hospital = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($hospital);
} else if (isset($_GET['count'])) {
    $sql = "SELECT COUNT(idHospital) AS idHospital FROM tbHospital";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $hospital = $stmt->fetch(PDO::FETCH_ASSOC);

    echo json_encode($hospital);
} else if (isset($_GET['repeatedCnpj'])) {
    $repeatedCnpj = @$_GET['repeatedCnpj'];

    $sql = "SELECT COUNT(idHospital) AS idHospital FROM tbHospital WHERE cnpjHospital LIKE :cnpj";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':cnpj', $repeatedCnpj);
    $stmt->execute();
    $hospital = $stmt->fetch(PDO::FETCH_ASSOC);

    echo json_encode($hospital);
} else {
    $sql = "SELECT h.idHospital, h.nomeHospital, h.emailHospital, t.idTelefone, t.numTelefone, DATE_FORMAT(h.aberturaHospital, '%H:%i') AS aberturaHospital, DATE_FORMAT(h.fechamentoHospital, '%H:%i') AS fechamentoHospital, h.cnpjHospital, h.ufHospital, h.logradouroHospital, h.complementoHospital, h.cepHospital , h.cidadeHospital, h.bairroHospital, h.fotoHospital
    FROM tbHospital h
    INNER JOIN tbTelefone t
    ON h.idHospital = t.idHospital";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $hospital = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($hospital);
}

if ($_SERVER['REQUEST_METHOD'] == "POST" && !isset($_GET['nomeHospital'])) {
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
    $lastHospId = $conn->lastInsertId();

    $sql = "INSERT INTO tbTelefone(idTelefone, numTelefone, idHospital) VALUES(null, :numTelefone, :idHospital)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':numTelefone', $numTelefone);
    $stmt->bindParam(':idHospital', $lastHospId);
    $stmt->execute();

    $files = $_FILES['picture'];
    $filename = $files['name'];
    $templocation = $files['tmp_name'];
    $file_destination = '../img/' . $filename;
    move_uploaded_file($templocation, $file_destination);
}

if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_GET['nomeHospital'])) {
    $nomeHospital = $_GET['nomeHospital'];
    $emailHospital = $_GET['emailHospital'];
    $numTelefone = $_GET['numTelefone'];
    $aberturaHospital = $_GET['aberturaHospital'];
    $fechamentoHospital = $_GET['fechamentoHospital'];
    $ufHospital = $_GET['ufHospital'];
    $logradouroHospital = $_GET['logradouroHospital'];
    $complementoHospital = $_GET['complementoHospital'];
    $cepHospital = $_GET['cepHospital'];
    $cidadeHospital = $_GET['cidadeHospital'];
    $bairroHospital = $_GET['bairroHospital'];
    $fotoHospital = $_GET['fotoHospital'];
    $idHospital = $_GET['idHospital'];
    $idTelefone = $_GET['idTelefone'];
    $files = @$_FILES['picture'];

    if (isset($files)) {
        $sql = "UPDATE tbHospital SET nomeHospital = :nomeHospital, emailHospital = :emailHospital, aberturaHospital = :aberturaHospital, fechamentoHospital = :fechamentoHospital, ufHospital = :ufHospital, logradouroHospital = :logradouroHospital, complementoHospital = :complementoHospital, cepHospital = :cepHospital, cidadeHospital = :cidadeHospital, bairroHospital = :bairroHospital, fotoHospital = :fotoHospital WHERE idHospital = :idHospital";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':nomeHospital', $nomeHospital);
        $stmt->bindParam(':emailHospital', $emailHospital);
        $stmt->bindParam(':aberturaHospital', $aberturaHospital);
        $stmt->bindParam(':fechamentoHospital', $fechamentoHospital);
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
        $stmt->bindValue(':idTelefone', $idTelefone);
        $stmt->execute();

        $filename = $files['name'];
        $templocation = $files['tmp_name'];
        $file_destination = '../img/' . $filename;
        move_uploaded_file($templocation, $file_destination);
    } else {
        $sql = "UPDATE tbHospital SET nomeHospital = :nomeHospital, emailHospital = :emailHospital, aberturaHospital = :aberturaHospital, fechamentoHospital = :fechamentoHospital, ufHospital = :ufHospital, logradouroHospital = :logradouroHospital, complementoHospital = :complementoHospital, cepHospital = :cepHospital, cidadeHospital = :cidadeHospital, bairroHospital = :bairroHospital WHERE idHospital = :idHospital";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':nomeHospital', $nomeHospital);
        $stmt->bindParam(':emailHospital', $emailHospital);
        $stmt->bindParam(':aberturaHospital', $aberturaHospital);
        $stmt->bindParam(':fechamentoHospital', $fechamentoHospital);
        $stmt->bindParam(':ufHospital', $ufHospital);
        $stmt->bindParam(':logradouroHospital', $logradouroHospital);
        $stmt->bindParam(':complementoHospital', $complementoHospital);
        $stmt->bindParam(':cepHospital', $cepHospital);
        $stmt->bindParam(':cidadeHospital', $cidadeHospital);
        $stmt->bindParam(':bairroHospital', $bairroHospital);
        $stmt->bindParam(':idHospital', $idHospital);
        $stmt->execute();

        $sql = "UPDATE tbTelefone SET numTelefone = :numTelefone WHERE idTelefone = :idTelefone";
        $stmt = $conn->prepare($sql);
        $stmt->bindValue(':numTelefone', $numTelefone);
        $stmt->bindValue(':idTelefone', $idTelefone);
        $stmt->execute();
    }
}

if ($_SERVER['REQUEST_METHOD'] == "DELETE") {
    $idHospital = $_GET['idHospital'];
    $idTelefone = $_GET['idTelefone'];

    $sql = "DELETE FROM tbHospital WHERE idHospital = :idHospital";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':idHospital', $idHospital);
    $stmt->execute();

    $sql = "DELETE FROM tbTelefone WHERE idTelefone = :idTelefone";
    $stmt = $conn->prepare($sql);
    $stmt->bindValue(':idTelefone', $idTelefone);
    $stmt->execute();
}
?>