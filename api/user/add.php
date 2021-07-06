<?php
  include '/vanilla-php/resources/enums/Roles.php';
  include '/vanilla-php/data/users.php';
  include '/vanilla-php/models/User.php';

  if(empty($_POST["username"])){
    http_response_code(400);
    return;
  }

  function addUser($user){

  }

  $path = "/vanilla-php/resources/users.xlsx";

  http_response_code(200);
  echo "Hello Add User!";
?>