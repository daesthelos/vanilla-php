<?php
  $name = '';
  $password = '';
  $gender = '';
  $color = '';
  $languages = [];
  $comments = '';
  $tc = '';

  if(isset($_POST['submit'])){
    $ok =  true;

    if(!isset($_POST['name']) || $_POST['name'] === ''){ 
      $ok = false;
     } else { 
      $name = $_POST["name"];
     }

    if(!isset($_POST['password']) || $_POST['password'] === ''){
      $ok = false;
    } else {
      $password = $_POST["password"];
    }

    if(!isset($_POST['gender']) || $_POST['gender'] === ''){
      $ok = false;
    } else {
    $gender = $_POST["gender"];
    }

    if(!isset($_POST['color']) || $_POST['color'] === ''){
      $ok = false;
    } else {
    $color = $_POST["color"];
    }

    if(!isset($_POST['languages']) || !is_array($_POST['languages']) || count($_POST['languages']) === 0){
      $ok = false;
    } else {
    $languages = $_POST["languages"];
    }

    if(!isset($_POST['comments']) || $_POST['comments'] === ''){
      $ok = false;
    } else {
    $comments = $_POST["comments"];
    }

    if(!isset($_POST['tc']) || $_POST['tc'] === ''){
      $ok = false;
    } else {
    $tc = $_POST["tc"];
    }

    if($ok) {
    printf('User name: %s
    <br>Passowrd: %s
    <br>Gender: %s
    <br>Color: %s
    <br>Language(s): %s
    <br>Comments: %s
    <br>T&amp;C: %s',
  htmlspecialchars($name, ENT_QUOTES),
  htmlspecialchars($password, ENT_QUOTES),
  htmlspecialchars($gender, ENT_QUOTES),
  htmlspecialchars($color, ENT_QUOTES),
  htmlspecialchars(implode(' ', $languages), ENT_QUOTES),
  htmlspecialchars($comments, ENT_QUOTES),
  htmlspecialchars($tc, ENT_QUOTES));
  }
}

// $regex = '/^\w+@(\w+\.)+\w+$/';
// if(!preg_match($regex, $_POST['key'])){ // 0 = no match, 1 = match
//   echo 'Format error!';
// }

?>

<form action="" method="POST">
  <label for="name">User name: </label><input type="text" name="name" value="<?php 
    echo htmlspecialchars($name, ENT_QUOTES);
  ?>" />
  <label for="password">Password: </label><input type="password" name="password" />
  <span>Gender</span>
  <label>Female 
    <input type="radio" name="gender" value="f" <?php if($gender === 'f'){ echo ' checked';}?> /></label>
  <label>Male 
    <input type="radio" name="gender" value="m" <?php if($gender === 'm'){ echo ' checked';}?>/></label>
  <label>Other 
    <input type="radio" name="gender" value="o" <?php if($gender === 'o'){ echo ' checked';}?>/></label>
  <span>Favorite color:</span>
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
  <label>Languages spoken:
  <select name="languages[]" multiple size="3">
    <option value="en"
      <?php if(in_array('en', $languages)){ echo ' selected'; } ?>
    >English</option>
    <option value="fr"
    <?php if(in_array('fr', $languages)){ echo ' selected'; } ?>
    >French</option>
    <option value="it"
    <?php if(in_array('it', $languages)){ echo ' selected'; } ?>
    >Italian</option>  
</select>
</label>
<label for="comments">Comments: </label><textarea name="comments"><?php
  echo htmlspecialchars($comments, ENT_QUOTES);
?></textarea>
<label>I accept the T&C <input type="checkbox" name="tc" value="ok" <?php 
  if($tc === "ok"){ 
    echo 'checked';
   }
?>/></label>
  <input type="submit" name="submit" value="Register" />
</form>