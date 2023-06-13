<?php
$fullname = $email = $password = $birthday = $gender = "";

if ($_SERVER['REQUEST_METHOD'] == "POST") { /*This element contains the request method used to access the current script (e.g., "GET", "POST", "PUT", "DELETE").
                                        It is often used to determine if a form has been submitted using the POST method.*/
    $fullname = $_POST["fullname"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $birthday = $_POST["birthday"];
    $gender = $_POST["gender"];
}
if ($fullname == "" || $email == "" || $password == "") {
    // Redirect to fail page
    header("Location: failresult.php");
}


echo "<h2>User Signup</h2>";
echo "Fullname : ";
echo $fullname;
echo "<br>";
echo "Email :";
echo $email;
echo "<br>";
echo "Gender : ";
echo $gender;
echo "<br>";
echo "Birthdate :";
echo $birthday;
echo "<br>";
echo "Thank You. You succesfully signup";
