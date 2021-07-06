<?php
  declare(strict_types=1);
   
   http_response_code(200);

   $arg = 'T';
   $vehicle = (((( $arg == 'B'  ? 'bus' :
                ( $arg == 'A' )) ? 'airplane' :
                ( $arg == 'T' )) ? 'train' :
                ( $arg == 'C' )) ? 'car' :
                ( $arg == 'H' )) ? 'horse' :
                'feet' ;
   echo $vehicle;
   


   //$csv_covid_us = file_get_contents("https://raw.githubusercontent.com/nytimes/covid-19-data/master/live/us.csv");
   //$csv_covid_us = explode("\n", $csv_covid_us);
   //echo json_encode($csv_covid_us);
   //echo (int) "";
?>