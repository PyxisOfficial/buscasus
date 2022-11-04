<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include '../../Connection.php';
$connection = new Connection;
$conn = $connection->connect();

if (isset($_GET['search'])) {
    $search = $_GET['search'];
    $idHospital = @$_GET['idHospital'];

    $sql = "SELECT m.idMedico, m.nomeMedico, m.cpfMedico, m.crmMedico, t.idTelefone, t.numTelefone, m.fotoMedico, m.fotoMedico, m.ausenciasMedico, e.idEspecialidade, e.nomeEspecialidade FROM tbMedico m     
            INNER JOIN tbEspecialidade e 
            ON m.idEspecialidade = e.idEspecialidade
            INNER JOIN tbTelefone t
            ON m.idMedico = t.idMedico 
            WHERE m.nomeMedico LIKE '%$search%' 
            OR e.nomeEspecialidade LIKE '%$search%'
            OR m.crmMedico LIKE '%$search%'
            AND m.idHospital = :id";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':id', $idHospital);
    $stmt->execute();
    $medico = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($medico);
} else if (isset($_GET['count'])) {
    $sql = "SELECT COUNT(idMedico) AS idMedico FROM tbMedico";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $medico = $stmt->fetch(PDO::FETCH_ASSOC);

    echo json_encode($medico);
} else {
    $idHospital = @$_GET['idHospital'];

    $sql = "SELECT m.idMedico, m.nomeMedico, m.cpfMedico, m.crmMedico, t.idTelefone, t.numTelefone, m.fotoMedico, m.fotoMedico, m.ausenciasMedico, e.idEspecialidade, e.nomeEspecialidade FROM tbMedico m     
            INNER JOIN tbEspecialidade e 
            ON m.idEspecialidade = e.idEspecialidade
            INNER JOIN tbTelefone t
            ON m.idMedico = t.idMedico 
            WHERE m.idHospital = :id";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':id', $idHospital);
    $stmt->execute();
    $medico = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($medico);
}

if ($_SERVER['REQUEST_METHOD'] == "POST" && !isset($_GET['nomeMedico'])) {
    $nomeMedico = $_POST['nomeMedico'];
    $cpfMedico = $_POST['cpfMedico'];
    $crmMedico = $_POST['crmMedico'];
    $numTelefone = $_POST['numTelefone'];
    $fotoMedico = $_POST['fotoMedico'];
    $idEspecialidade = $_POST['idEspecialidade'];
    $idHospital = $_POST['idHospital'];

    $sql = "INSERT INTO tbMedico(idMedico, nomeMedico, cpfMedico, crmMedico, fotoMedico, idEspecialidade, idHospital) VALUES(null, :nomeMedico, :cpfMedico, :crmMedico, :fotoMedico, :idEspecialidade, :idHospital)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':nomeMedico', $nomeMedico);
    $stmt->bindParam(':cpfMedico', $cpfMedico);
    $stmt->bindParam(':crmMedico', $crmMedico);
    $stmt->bindParam(':fotoMedico', $fotoMedico);
    $stmt->bindParam(':idEspecialidade', $idEspecialidade);
    $stmt->bindParam(':idHospital', $idHospital);
    $stmt->execute();
    $lastMedId = $conn->lastInsertId();

    $sql = "INSERT INTO tbTelefone(idTelefone, numTelefone, idMedico) VALUES(null, :numTelefone, :idMedico)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':numTelefone', $numTelefone);
    $stmt->bindParam(':idMedico', $lastMedId);
    $stmt->execute();
        
    $files = $_FILES['picture'];
    $filename = $files['name'];
    $templocation = $files['tmp_name'];
    $file_destination = '../img/' . $filename;
    move_uploaded_file($templocation, $file_destination);
}

if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_GET['nomeMedico'])) {
    $nomeMedico = $_GET['nomeMedico'];
    $numTelefone = $_GET['numTelefone'];
    $fotoMedico = $_GET['fotoMedico'];
    $idEspecialidade = $_GET['idEspecialidade'];
    $idMedico = $_GET['idMedico'];
    $idTelefone = $_GET['idTelefone'];
    $files = @$_FILES['picture'];

    if (isset($files)) {
        $sql = "UPDATE tbMedico SET nomeMedico= :nomeMedico, fotoMedico =:fotoMedico, idEspecialidade =:idEspecialidade WHERE idMedico = :idMedico";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':nomeMedico', $nomeMedico);
        $stmt->bindParam(':idEspecialidade', $idEspecialidade);
        $stmt->bindParam(':fotoMedico', $fotoMedico);
        $stmt->bindParam(':idMedico', $idMedico);
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
        $sql = "UPDATE tbMedico SET nomeMedico= :nomeMedico, idEspecialidade =:idEspecialidade WHERE idMedico = :idMedico";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':nomeMedico', $nomeMedico);
        $stmt->bindParam(':idEspecialidade', $idEspecialidade);
        $stmt->bindParam(':idMedico', $idMedico);
        $stmt->execute();

        $sql = "UPDATE tbTelefone SET numTelefone = :numTelefone WHERE idTelefone = :idTelefone";
        $stmt = $conn->prepare($sql);
        $stmt->bindValue(':numTelefone', $numTelefone);
        $stmt->bindValue(':idTelefone', $idTelefone);
        $stmt->execute();
    }
}

if ($_SERVER['REQUEST_METHOD'] == "DELETE") {
    $idMedico = $_GET['idMedico'];
    $idTelefone = $_GET['idTelefone'];

    $sql = "DELETE FROM tbMedico WHERE idMedico = :id";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':id', $idMedico);
    $stmt->execute();

    $sql = "DELETE FROM tbTelefone WHERE idTelefone = :idTelefone";
    $stmt = $conn->prepare($sql);
    $stmt->bindValue(':idTelefone', $idTelefone);
    $stmt->execute();
}
?>