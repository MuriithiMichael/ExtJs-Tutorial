<?php
/**
 * Created by IntelliJ IDEA.
 * User: Micah
 * Date: 02/10/2017
 * Time: 17:06
 */
require ("../db/db.php");

session_start();

$data = $_POST['data'];
$data = json_decode(stripslashes($data));
foreach ($data as $value){
    $updateQuery = sprintf("UPDATE country SET country = '%s',last_update = '%s' WHERE country_id = '%s'",
        $mysqli->real_escape_string($value->country),
        $mysqli->real_escape_string($value->last_update),
        $mysqli->real_escape_string($value->country_id));

    $resultDB = $mysqli->query($updateQuery);
}

echo json_encode(array(
    "success" => $mysqli->error == '',
    "msg" => $mysqli->error,
    "data" => $data
));

$mysqli->close();

