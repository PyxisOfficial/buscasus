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

    $sql = "SELECT m.idMedico, m.nomeMedico, m.cpfMedico, m.crmMedico, m.fotoMedico, m.fotoMedico, m.ausenciasMedico, e.idEspecialidade, e.nomeEspecialidade FROM tbMedico m     
            INNER JOIN tbEspecialidade e 
            ON m.idEspecialidade = e.idEspecialidade 
            WHERE m.nomeMedico LIKE '%$search%' AND m.idHospital = :id";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':id', $idHospital);
    $stmt->execute();
    $medico = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($medico);
} else {
    $idHospital = @$_GET['idHospital'];

    $sql = "SELECT m.idMedico, m.nomeMedico, m.cpfMedico, m.crmMedico, m.fotoMedico, m.fotoMedico, m.ausenciasMedico, e.idEspecialidade, e.nomeEspecialidade FROM tbMedico m     
            INNER JOIN tbEspecialidade e 
            ON m.idEspecialidade = e.idEspecialidade 
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
        
    $files = $_FILES['picture'];
    $filename = $files['name'];
    $templocation = $files['tmp_name'];
    $file_destination = '../img/' . $filename;
    move_uploaded_file($templocation, $file_destination);
}

if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_GET['nomeMedico'])) {
    $nomeMedico = $_GET['nomeMedico'];
    $fotoMedico = $_GET['fotoMedico'];
    $idEspecialidade = $_GET['idEspecialidade'];
    $idMedico = $_GET['idMedico'];
    $files = @$_FILES['picture'];

    if (isset($files)) {
        $sql = "UPDATE tbMedico SET nomeMedico= :nomeMedico, fotoMedico =:fotoMedico, idEspecialidade =:idEspecialidade WHERE idMedico = :idMedico";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':nomeMedico', $nomeMedico);
        $stmt->bindParam(':idEspecialidade', $idEspecialidade);
        $stmt->bindParam(':fotoMedico', $fotoMedico);
        $stmt->bindParam(':idMedico', $idMedico);
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
    }
}

if ($_SERVER['REQUEST_METHOD'] == "DELETE") {
    $idMedico = $_GET['idMedico'];

    $sql = "DELETE FROM tbMedico WHERE idMedico = :id";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':id', $idMedico);
    $stmt->execute();
}
?>