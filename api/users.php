<?php
require '../vendor/autoload.php';

use PHPOffice\PhpSpreadsheet\Spreadsheet;
use PHPOffice\PhpSpreadsheet\Write\Xlsx;


$worksheet = \PhpOffice\PhpSpreadsheet\IOFactory::load("../resources/exp_required.xlsx") -> getActiveSheet();

$output = array();

$highestRow = $worksheet->getHighestRow();
$highestColumn = $worksheet->getHighestColumn();
$highestColumnIndex = \PhpOffice\PhpSpreadsheet\Cell\Coordinate::columnIndexFromString($highestColumn);
//Fetch column headers (lv, exp required)
$table_headers = array();
$row = 1; //Spreadsheets are 1 based
for($col = 1; $col < $highestColumnIndex; ++$col) {
  $value = $worksheet->getCellByColumnAndRow($col, 1)->getValue();
  array_push($table_headers,  $value);
}
//Iterate over the rest of the rows e.g. (1,2) and feed them into an array (lv => 1, exp_required => 2)
for($row = 2; $row < $highestRow; ++$row) {
  $rowData = array();
  for($col = 1; $col < $highestColumnIndex; ++$col) {
    $rowData[$table_headers[$col-1]] = $worksheet->getCellByColumnAndRow($col,$row)->getValue();
  }
  array_push($output, $rowData);
}

//feed those into a bigger array

echo json_encode($output);
/**
 * [
 *   [lv => 1, exp_required => 1],
 *   [],
 *   [],
 *   [],
 * ]
 */


//$users = array();
//array_push($users, ["name" => "John", "email" => "john@doe.com" ]);
//array_push($users, ["name" => "Jane", "email" => "jane@doe.com"]);

//echo json_encode($users);

?>