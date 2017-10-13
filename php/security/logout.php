<?php
/**
 * Created by IntelliJ IDEA.
 * User: Micah
 * Date: 20/07/2017
 * Time: 18:35
 */

session_start();

$_SESSION = array();
session_destroy();
$result = array();
$result['success']= true;
$result['msg'] ='logout';

echo json_encode($result);

?>