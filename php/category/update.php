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
    $updateQuery = sprintf("UPDATE category SET name = '%s', last_update = '%s' WHERE category_id = '%s'",
        $mysqli->real_escape_string($value->name),
        $mysqli->real_escape_string($value->last_update),
        $mysqli->real_escape_string($value->category_id));

    $resultDB = $mysqli->query($updateQuery);
}

echo json_encode(array(
    "success" => $mysqli->error == '',
    "msg" => $mysqli->error,
    "data" => $data
));

$mysqli->close();

