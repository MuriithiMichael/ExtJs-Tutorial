<?php
/**
 * Created by IntelliJ IDEA.
 * User: Micah
 * Date: 06/10/2017
 * Time: 21:45
 */
require ("../db/db.php");

session_start();

$data = $_POST['data'];
$data = json_decode(stripslashes($data));
foreach ($data as $value){
    $deleteQuery = sprintf("Delete FROM category WHERE category_id = '%s'",
        $mysqli->real_escape_string($value->category_id));

    $resultDB = $mysqli->query($deleteQuery);
}

echo json_encode(array(
    "success" => $mysqli->error == '',
    "msg" => $mysqli->error,
    "data" => $data
));

$mysqli->close();