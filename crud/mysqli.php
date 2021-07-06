<?php

  $name = '';
  $gender = '';
  $color = '';
  if(isset($_POST['submit'])){
    $ok =  true;

    switch (true) {
      case (!isset($_POST['name']) || $_POST['name'] === ''):
      case (!isset($_POST['gender']) || $_POST['gender'] === ''):
      case (!isset($_POST['color']) || $_POST['color'] === ''):
        case (!isset($_POST['color']) || $_POST['color'] === ''):
        $ok = false;
        break;
    }
    
    $name = $_POST['name'];
    $password = $_POST['password'];
    $gender = $_POST['gender'];
    $color = $_POST['color'];

    if($ok){
      $db = new mysqli('localhost', 'user', 'password', 'php');

      $hash = password_hash($password, PASSWORD_DEFAULT);

      $p = password_verify($password, $hash);

      $sql = sprintf("INSERT INTO users (name, gender, color, hash) VALUES ('%s','%s','%s','%s')",
        $db->real_escape_string($name),
        $db->real_escape_string($gender),
        $db->real_escape_string($color),
        $hash,
      );
      $db->query($sql);


      echo '<p>User added.</p>';
      $db->close();
    }
  }

  //$db->query("INSERT INTO users (1,2,3,4) VALUES (5,6,7,8)");
?>
<h1>Welcome to the mysql page</h1>
<form action="" method="POST">
  <label for="name">User name: </label><input type="text" name="name" value="<?php 
    echo htmlspecialchars($name, ENT_QUOTES);
  ?>" />
  <label for="password">Password</label>
  <input type="password" name="password">
  <span>Gender</span>
  <label>Female 
    <input type="radio" name="gender" value="f" <?php if($gender === 'f'){ echo ' checked';}?> /></label>
  <label>Male 
    <input type="radio" name="gender" value="m" <?php if($gender === 'm'){ echo ' checked';}?>/></label>
  <label>Other 
    <input type="radio" name="gender" value="o" <?php if($gender === 'o'){ echo ' checked';}?>/></label>
  <p>Favorite color:</p>
  <select name="color">
      <option value="">Please select</option>
      <option value="#f00"
        <?php if($color === '#f00'){ echo ' selected'; } ?>
      >red</option>
      <option value="#0f0"
      <?php if($color === '#0f0'){ echo ' selected'; } ?>>green</option>
      <option value="#00f
      <?php if($color === '#00f'){ echo ' selected'; } ?>">blue</option>
  </select> 
  <input type="submit" name="submit" value="Register" />
</form>