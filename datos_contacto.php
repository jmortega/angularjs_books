<?php

$objDatos = json_decode(file_get_contents("php://input"));

$response = new stdClass();
$response->nombre = $objDatos->nombre;
$response->apellidos = $objDatos->apellidos;
$response->email = $objDatos->email;
$response->mensaje = $objDatos->mensaje;

echo json_encode($response);

?>