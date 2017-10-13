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
    $updateQuery = sprintf("UPDATE city SET city = '%s', country_id = '%s', last_update = '%s' WHERE city_id = '%s'",
        $mysqli->real_escape_string($value->city),
        $mysqli->real_escape_string($value->country_id),
        $mysqli->real_escape_string($value->last_update),
        $mysqli->real_escape_string($value->city_id));

    $resultDB = $mysqli->query($updateQuery);
}

echo json_encode(array(
    "success" => $mysqli->error == '',
    "msg" => $mysqli->error,
    "data" => $data
));

$mysqli->close();

