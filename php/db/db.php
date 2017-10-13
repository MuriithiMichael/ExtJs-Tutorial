<?php

$server = "127.0.0.1";
$username = "root";
$password = "";
$database = "sakila";

$mysqli = new mysqli($server, $username, $password, $database);

//check connection
if($mysqli->connect_errno){
    printf("Connection failed: %s\n", mysqli_connect_error());
    exit();
}

?>