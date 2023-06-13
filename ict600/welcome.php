<?php
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

echo "<h2>Form Submission Success:</h2>";
echo "Welcome, ";
echo $name;
echo "<br>";
echo "Your email is ";
echo $email;
echo "<br>";
echo "People can visit your web at ";
echo $website;
echo "<br>";
echo "You are a ";
echo $gender;
echo "<br>";
echo "<br>";
echo "Comments: ";
echo "<br>";
echo $comment;
