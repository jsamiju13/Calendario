<?php
    $server = "localhost";
    $user = "root";
    $pass = "";
    $db = "informatica_3";

    $miBase = new mysqli($server, $user, $pass, $db);

    if ($miBase->connect_errno){
        die("no");
    }else{

    }

// Realizar una consulta
$sql = "SELECT nombre FROM materias";
$result = $miBase->query($sql);

$materias = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $materias[] = $row['nombre'];
    }
    echo json_encode($materias);
} else {
    echo json_encode([]);
}

$miBase->close();
    
?>