<?php
/**
 * Created by IntelliJ IDEA.
 * User: Micah
 * Date: 06/11/2017
 * Time: 15:14
 */
/** Error reporting */
error_reporting(E_ALL);
ini_set('display_errors', TRUE);
ini_set('display_startup_errors', TRUE);
date_default_timezone_set('Europe/London');
if (PHP_SAPI == 'cli')
    die('This example should only be run from a Web Browser');
/** Include PHPExcel */
require_once '../PHPExcel/Classes/PHPExcel.php';
/** Include DB files */
require_once("../db/db.php");
// Create new PHPExcel object
$objPHPExcel = new PHPExcel();

class MyExcel{
    public function loadExcelData($header, $data, $objPHPExcel){
        //Add headers
            $objPHPExcel->setActiveSheetIndex(0)
                ->setCellValue('A1', $header[0])
                ->setCellValue('B1', $header[1])
                ->setCellValue('C1', $header[2])
                ->setCellValue('D1', $header[3])
                ->setCellValue('E1', $header[4])
                ->setCellValue('F1', $header[5])
                ->setCellValue('G1', $header[6])
                ->setCellValue('H1', $header[7])
                ->setCellValue('I1', $header[8]);
        //Set headers to bold
        $objPHPExcel->getActiveSheet()->getStyle('A1:I1')->getFont()->setBold(true);
        // Add some data
        $row_index = 2;
        foreach ($data as $row){
            $objPHPExcel->setActiveSheetIndex(0)
                ->setCellValue('A'.$row_index, $row['film_id'])
                ->setCellValue('B'.$row_index, $row['title'])
                ->setCellValue('C'.$row_index, $row['name'])
                ->setCellValue('D'.$row_index, $row['release_year'])
                ->setCellValue('E'.$row_index, $row['length'])
                ->setCellValue('F'.$row_index, $row['rating'])
                ->setCellValue('G'.$row_index, $row['rental_duration'])
                ->setCellValue('H'.$row_index, $row['rental_rate'])
                ->setCellValue('I'.$row_index, $row['last_update']);
            $row_index++;
        }
//$objPHPExcel->setActiveSheetIndex(0)
//    ->setCellValue('A1', 'Hello')
//    ->setCellValue('B2', 'world!')
//    ->setCellValue('C1', 'Hello')
//    ->setCellValue('D2', 'world!');
    }
}

//load data
$sql = "SELECT film_id, title, release_year, rental_duration, rental_rate, ";
$sql .= "length, rating, f.last_update, l.name FROM Film f ";
$sql .= "inner join language l on f.language_id = l.language_id ORDER BY film_id ASC LIMIT 0,1000";
$result = array();
if ($resultdb = $mysqli->query($sql)) {
    while($record = $resultdb->fetch_assoc()) {
        array_push($result, $record);
    }
    $resultdb->close();
}

//Create new $excel object
$excel = new MyExcel();
//Excel headers
$header = array('Film Id', 'Title', 'Language', 'Release Year', 'Length', 'Rating', 'Rental Duration', 'Rental Rate', 'Last Update');
//
$excel->loadExcelData($header, $result, $objPHPExcel);

// Set document properties
$objPHPExcel->getProperties()->setCreator("Maarten Balliauw")
    ->setLastModifiedBy("Maarten Balliauw")
    ->setTitle("Office 2007 XLSX Test Document")
    ->setSubject("Office 2007 XLSX Test Document")
    ->setDescription("Test document for Office 2007 XLSX, generated using PHP classes.")
    ->setKeywords("office 2007 openxml php")
    ->setCategory("Test result file");
// Add some data
//$objPHPExcel->setActiveSheetIndex(0)
//    ->setCellValue('A1', 'Hello')
//    ->setCellValue('B2', 'world!')
//    ->setCellValue('C1', 'Hello')
//    ->setCellValue('D2', 'world!');

// Miscellaneous glyphs, UTF-8
//$objPHPExcel->setActiveSheetIndex(0)
//    ->setCellValue('A4', 'Miscellaneous glyphs')
//    ->setCellValue('A5', 'éàèùâêîôûëïüÿäöüç');

// Rename worksheet
$objPHPExcel->getActiveSheet()->setTitle('Films Data');
// Set active sheet index to the first sheet, so Excel opens this as the first sheet
$objPHPExcel->setActiveSheetIndex(0);
// Redirect output to a client’s web browser (Excel5)
header('Content-Type: application/vnd.ms-excel');
header('Content-Disposition: attachment;filename="films.xls"');
header('Cache-Control: max-age=0');
$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel5');
$objWriter->save('php://output');
exit;