<?php
/**
 * Created by IntelliJ IDEA.
 * User: Micah
 * Date: 29/10/2017
 * Time: 19:39
 */
require ("../db/db.php");

session_start();

$catQuery = "SELECT * FROM film_category WHERE film_id = '%d'";
$dbCategories = array();
$data = $_POST['data'];
$data = json_decode(stripslashes($data));
foreach ($data as $value){
    $special_feature = implode(",", $value->special_features );
    $film_id = $value->film_id;
$updateQuery = sprintf("UPDATE film SET title = '%s', description = '%s', release_year = '%s', language_id = '%s',
                          original_language_id = '%s', rental_duration = '%s', rental_rate = '%s', length = '%s', 
                          replacement_cost = '%s', rating = '%s', special_features = '%s', last_update = '%s' WHERE film_id = '%s'",
    $mysqli->real_escape_string($value->title),
    $mysqli->real_escape_string($value->description),
    $mysqli->real_escape_string($value->release_year),
    $mysqli->real_escape_string($value->language_id),
    $mysqli->real_escape_string($value->original_language_id),
    $mysqli->real_escape_string($value->rental_duration),
    $mysqli->real_escape_string($value->rental_rate),
    $mysqli->real_escape_string($value->length),
    $mysqli->real_escape_string($value->replacement_cost),
    $mysqli->real_escape_string($value->rating),
    $mysqli->real_escape_string($special_feature),
    $mysqli->real_escape_string($value->last_update),
    $mysqli->real_escape_string($film_id));

$resultDB = $mysqli->query($updateQuery);

$actorData = $value->actors;

$categoriesData = $value->categories;
//retrieve film_categories (many-to-many)
    $categoriesQuery = sprintf($catQuery, $film_id);
    if($resultDbCat = $mysqli->query($categoriesQuery)){
        while($category = $resultDbCat->fetch_assoc()) {
            array_push($dbCategories, $category['category_id']);
        }
        print_r ($dbCategories);
    }
    //check if new values exist and insert if they exist
foreach ($categoriesData as $catValue){
    if(!in_array($catValue, $dbCategories)){
        $insertCatQuery = sprintf("INSERT INTO film_category (film_id, category_id, last_update) VALUES ('%d', '%d', CURRENT_TIME())",
            $mysqli->real_escape_string($film_id),
            $mysqli->real_escape_string($catValue->category_id));
        $resultInsertCat = $mysqli->query($insertCatQuery);
    }
}
    //check if film_categories have been deleted from ext data store and perform a delete on film_category table
//foreach ($dbCategories as $dbCategory){
//    $i = 0;
//    if(!in_array($dbCategory, $categoriesData)){
//        $deleteCatQuery = sprintf("DELETE FROM film_category WHERE film_id = '%d' and category_id = '%d'",
//            $mysqli->real_escape_string($film_id),
//            $mysqli->real_escape_string($dbCategory[$i]));
//        $resultDeleteCat = $mysqli->query($deleteCatQuery);
//        $i++;
//    }
//}

}

echo json_encode(array(
"success" => $mysqli->error == '',
"msg" => $mysqli->error,
"data" => $data
));

$mysqli->close();