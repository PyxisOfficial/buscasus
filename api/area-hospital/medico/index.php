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

    $sql = "SELECT m.idMedico, m.nomeMedico, m.cpfMedico, m.crmMedico, t.idTelefone, t.numTelefone, m.fotoMedico, m.fotoMedico FROM tbMedico m
            INNER JOIN tbTelefone t
            ON m.idMedico = t.idMedico
            INNER JOIN tbMedicoHospital mh
            ON m.idMedico = mh.idMedico
            WHERE (m.nomeMedico LIKE '%$search%' AND mh.idHospital = :id)
            OR (m.cpfMedico LIKE '%$search%' AND mh.idHospital = :id)
            OR (m.crmMedico LIKE '%$search%' AND mh.idHospital = :id)
            ORDER BY m.nomeMedico ASC";
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
} else if (isset($_GET['hospitalCount'])) {

    $idHospital = @$_GET['idHospital'];

    $sql = "SELECT COUNT(m.idMedico) AS idMedico FROM tbMedico m
    INNER JOIN tbMedicoHospital mh
    ON m.idMedico = mh.idMedico
    WHERE idHospital = :id";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':id', $idHospital);
    $stmt->execute();
    $medico = $stmt->fetch(PDO::FETCH_ASSOC);

    echo json_encode($medico);
} else if (isset($_GET['repeatedCpf'])) {

    $repeatedCpf = @$_GET['repeatedCpf'];
    $idHospital = @$_GET['idHospital'];

    $sql = "SELECT COUNT(m.idMedico) AS idMedico FROM tbMedico m 
    INNER JOIN tbMedicoHospital mh
    ON m.idMedico = mh.idMedico
    WHERE cpfMedico LIKE :cpf AND idHospital = :idHospital";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':cpf', $repeatedCpf);
    $stmt->bindParam(':idHospital', $idHospital);
    $stmt->execute();
    $medico = $stmt->fetch(PDO::FETCH_ASSOC);

    echo json_encode($medico);
} else if (isset($_GET['idMedico'])) {

    $idMedico = @$_GET['idMedico'];

    $sql = "SELECT GROUP_CONCAT(e.nomeEspecialidade SEPARATOR ', ') AS nomeEspecialidade FROM tbEspecialidade e
            INNER JOIN tbMedicoEspecialidade me
            ON e.idEspecialidade = me.idEspecialidade
            WHERE me.idMedico = :idMedico AND e.idEspecialidade > 1";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':idMedico', $idMedico);
    $stmt->execute();
    $medico = $stmt->fetch(PDO::FETCH_ASSOC);

    echo json_encode($medico);
} else if (isset($_GET['idHospital'])) {

    $idHospital = @$_GET['idHospital'];

    $sql = "SELECT m.idMedico, m.nomeMedico, m.cpfMedico, m.crmMedico, m.fotoMedico, m.fotoMedico, t.idTelefone, t.numTelefone FROM tbMedico m
    INNER JOIN tbTelefone t 
    ON m.idMedico = t.idMedico
    INNER JOIN tbMedicoHospital mh 
    ON m.idMedico = mh.idMedico         
    WHERE mh.idHospital = :idHospital
          ";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':idHospital', $idHospital);
    $stmt->execute();
    $medico = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($medico);
} else if (isset($_GET['generalSearch'])) {
    $generalSearch = $_GET['generalSearch'];

    $sql = "SELECT idMedico, nomeMedico FROM tbMedico 
            WHERE nomeMedico LIKE '%$generalSearch%'
            ORDER BY nomeMedico ASC";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $medico = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($medico);
} else {

    $sql = "SELECT * FROM tbMedico GROUP BY nomeMedico";
    $stmt = $conn->prepare($sql);
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

    $files = $_FILES['picture'];
    $filename = $files['name'];
    $templocation = $files['tmp_name'];
    $file_destination = '../img/' . $filename;
    move_uploaded_file($templocation, $file_destination);

    $sql = "INSERT INTO tbMedico(idMedico, nomeMedico, cpfMedico, crmMedico, fotoMedico) VALUES(null, :nomeMedico, :cpfMedico, :crmMedico, :fotoMedico)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':nomeMedico', $nomeMedico);
    $stmt->bindParam(':cpfMedico', $cpfMedico);
    $stmt->bindParam(':crmMedico', $crmMedico);
    $stmt->bindParam(':fotoMedico', $fotoMedico);
    $stmt->execute();
    $lastMedId = $conn->lastInsertId();

    $sql = "INSERT INTO tbMedicoHospital(idMedicoHospital, idMedico, idHospital) VALUES(null, :idMedico, :idHospital)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':idMedico', $lastMedId);
    $stmt->bindParam(':idHospital', $idHospital);
    $stmt->execute();

    $sql = "INSERT INTO tbTelefone(idTelefone, numTelefone, idMedico) VALUES(null, :numTelefone, :idMedico)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':numTelefone', $numTelefone);
    $stmt->bindParam(':idMedico', $lastMedId);
    $stmt->execute();

    for ($i = 0; $i < $idEspecialidade; $i++) {
        $sql = "INSERT INTO tbMedicoEspecialidade(idMedicoEspecialidade, idMedico, idEspecialidade) VALUES(null, :idMedico, :idEspecialidade)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':idMedico', $lastMedId);
        $stmt->bindParam(':idEspecialidade', $idEspecialidade[$i]);
        $stmt->execute();
    }

    echo json_encode($stmt);
}
if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_GET['idEspecialidade'])) {
    $idEspecialidade = $_POST['idEspecialidade'];
    $idMedico = $_POST['idMedico'];

    for ($i = 0; $i < $idEspecialidade; $i++) {
        $sql = "INSERT INTO tbMedicoEspecialidade(idMedicoEspecialidade, idMedico, idEspecialidade) VALUES(null, :idMedico, :idEspecialidade)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':idMedico', $lastMedId);
        $stmt->bindParam(':idEspecialidade', $idEspecialidade[$i]);
        $stmt->execute();
    }
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
        $sql = "UPDATE tbMedico SET nomeMedico= :nomeMedico, fotoMedico =:fotoMedico WHERE idMedico = :idMedico";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':nomeMedico', $nomeMedico);
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
        $sql = "UPDATE tbMedico SET nomeMedico= :nomeMedico WHERE idMedico = :idMedico";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':nomeMedico', $nomeMedico);
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

    $sql = "DELETE FROM tbMedicoEspecialidade WHERE idMedico = :idMedico";
    $stmt = $conn->prepare($sql);
    $stmt->bindValue(':idMedico', $idMedico);
    $stmt->execute();
}

if ($_SERVER['REQUEST_METHOD'] == "DELETE" && isset($_GET['deleteSpe'])) {
    $sql = "DELETE FROM tbMedicoEspecialidade WHERE idMedico = :idMedico";
    $stmt = $conn->prepare($sql);
    $stmt->bindValue(':idMedico', $idMedico);
    $stmt->execute();
}
