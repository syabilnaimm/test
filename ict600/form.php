<html>

<head>
</head>

<body>

  <?php
  // define variables and set to empty values
  $name = $email = $gender = $comment = $website = "";

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = test_input($_POST["name"]);
    $email = test_input($_POST["email"]);
    $website = test_input($_POST["website"]);
    $comment = test_input($_POST["comment"]);
    $gender = test_input($_POST["gender"]);
  }

  function test_input($data)
  {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }
  ?>

  <h2>PHP Form Validation Example</h2>
  <form method="post" action="welcome.php">
    <span style="color:red">* required Field</span><br><br>
    Name: <input type="text" name="name" required>
    <span class="required-asterisk">*</span>
    <br><br>
    E-mail: <input type="text" name="email" required>
    <span class="required-asterisk">*</span>
    <br><br>
    Website: <input type="text" name="website" required>
    <span class="required-asterisk">*</span>
    <br><br>
    Gender:
    <input type="radio" name="gender" value="female" required>Female
    <input type="radio" name="gender" value="male" required>Male
    <input type="radio" name="gender" value="other" required>Other
    <span class="required-asterisk">*</span>
    <br><br>
    Comment:<br> <textarea name="comment" rows="5" cols="40" required></textarea>
    <span class="required-asterisk">*</span>
    <br><br>
    <input type="submit" name="submit" value="Submit">
  </form>



</body>
<style>
  .required-asterisk {
    color: red;
    font-size: 18px;
    vertical-align: middle;
    margin-left: 5px;
  }
</style>

</html>