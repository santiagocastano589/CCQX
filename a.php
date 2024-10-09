<html>
<html>

<head>
  <title>Registrar Paciente</title>
</head>

<body>
  <?php
  $server = "172.30.0.2";
  $username = "ccq";
  $password = "ccq";
  $database = "HOSVITAL";
  $conexion = new PDO("sqlsrv:server=$server;Database=$database", $username, $password);
  $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  die("Problemas con la conexión");

  $resultado="INSERT INTO `dbo.RADICACIONCX` (`FecRadi`, `ProductID`, `TipDoc`, `Documento`, `Paciente`, `Tel1`, `tel2`, `Cups1`, `Cups2`, `Cups3`, `Cups4`, `Cups5`, `OtroCups`, `Esp`, `Especialista`, `Eps`, `Regimen`, `Anestesia`, `Observacion`, `Comentarios`) 
  VALUES ('$_REQUEST[FecRadi]', '$_REQUEST[ProductID]', '$_REQUEST[TipDoc]', '$_REQUEST[Documento]', '$_REQUEST[Paciente]', '$_REQUEST[Tel1]', '$_REQUEST[tel2]', '$_REQUEST[Cups1]', '$_REQUEST[Cups2]', '$_REQUEST[Cups3]', '$_REQUEST[Cups4]', '$_REQUEST[Cups5]', '$_REQUEST[OtroCups]', '$_REQUEST[Esp]', '$_REQUEST[Especialista]', '$_REQUEST[Eps]', '$_REQUEST[Regimen]', '$_REQUEST[Anestesia]', '$_REQUEST[Observacion]', '$_REQUEST[Comentarios]')"
    or die("Problemas en el query" . mysqli_error($conexion));

  // mysqli_close($conexion);

  if($resultado) {
    echo "<script>alert('Se han ingresado los datos correctamente, actualize la p\u00E1gina para ver los cambios');
      window.location='/index.html';</script>";
  }
  else {
    echo "<script>alert('No se pudieron insertar los datos'); window.location.go(-1);</script>";
  }

  ?>
</body>

</html>
