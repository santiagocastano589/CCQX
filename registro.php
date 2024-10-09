<?php
header('Content-Type: application/json');

$server = "172.30.0.2";
$username = "HOSVITAL";
$password = "CCQ2019Clinica";
$database = "HOSVITAL";

try {

    $conn = new PDO("sqlsrv:server=$server;Database=$database", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $query = "INSERT INTO dbo.RADICACIONCX (FecRadi, ProductID, TipDoc, Documento, Paciente, Tel1, tel2, Cups1, Cups2, Cups3, Cups4, Cups5, OtroCups, Esp, Especialista, Eps, Regimen, Anestesia, Observacion, Comentarios) 
      VALUES ('$_POST[FecRadi]', '$_POST[ProductID]', '$_POST[TipDoc]', '$_POST[Documento]', '$_POST[Paciente]', '$_POST[Tel1]', '$_POST[tel2]', '$_POST[Cups1]', '$_POST[Cups2]', '$_POST[Cups3]', '$_POST[Cups4]', '$_POST[Cups5]', '$_POST[OtroCups]', '$_POST[Esp]', '$_POST[Especialista]', '$_POST[Eps]', '$_POST[Regimen]', '$_POST[Anestesia]', '$_POST[Observacion]', '$_POST[Comentarios]')";

$stmt = $conn->prepare($query);
$stmt->execute();

$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($results);
} catch (PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
?>
