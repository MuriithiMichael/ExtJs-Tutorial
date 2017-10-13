<?php
/**
 * Created by IntelliJ IDEA.
 * User: Micah
 * Date: 29/09/2017
 * Time: 15:43
 */

require("../db/db.php");
//validate if user can do this action
//sanitize input for security
session_start();
$data = $_POST['data'];
$data = json_decode(stripslashes($data));
foreach ($data as $value){
    $query = sprintf("INSERT INTO city (city, country_id, last_update)  values ('%s', '%s', '%s')",
        $mysqli->real_escape_string($value->city),
        $mysqli->real_escape_string($value->country_id),
        $mysqli->real_escape_string($value->last_update));
    if ($resultDb = $mysqli->query($query)) {
        $id = $mysqli->insert_id;
        $value->city_id = $id;
    }
}
echo json_encode(array(
    "success" => $mysqli->error == '',
    "data" => $data
));
/* close connection */
$mysqli->close();