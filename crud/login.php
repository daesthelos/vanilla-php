<?php
require __DIR__ . '/../config.inc.php';

session_start();

$message = '';

if(isset($_POST['name']) && isset($_POST['password'])) {
  $db = new mysqli(MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE);

  $sql = sprintf("SELECT * FROM users where name='%s'", $db->real_escape_string($_POST['name']));
  
  $result = $db->query($sql);

  $row = $result->fetch_object();
  if($row != null){
    $hash = $row->hash;
    if(password_verify($_POST['password'], $hash)){
      $message = 'Login successful';
      $_SESSION['username'] = $row->name;
      $_SESSION['isAdmin'] = $row->isAdmin;
    } else {
      $message = 'Login faileed';
    } 
  } else {
    $message = 'Login failedd';
  }

  $db->close();
} else {
  echo "<h3>Goodbye world</h3>";
}
?>
<?php
  readfile('../header.tmpl.html');
?>
<?php
  echo "<h1>$message</h1>";
?>
<form method="POST">
  <label>Username<input type='text' name="name" /></label>
  <label>Password<input type='password' name="password" /></label>
  <button type="submit">Login</button>
</form>
<?php
  readfile('../footer.tmpl.html');
?>