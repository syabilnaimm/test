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

?>
<h2>User Signup</h2>
<form action="successresult.php" method="POST">
    <span style=color:red>*Required Information Fullname*</span><br>
    <input type="text" name="fullname" id="fullname"><br>
    <label for="email">Email* : </label><br>
    <input type="email" name="email" id="email"><br>
    <label for="password">Password : *</label><br>
    <input type="password" name="password" id="password"><br><br>
    <label for="birthday"> Birthdate : </label>
    <input type="date" name="birthday" id="birthday"><br><br>
    <label for="gender">Gender : </label>
    <input type="radio" name="gender" id="male" value="male">
    <label for="male">Male</label>
    <input type="radio" name="gender" id="female" value="female">
    <label for="female">Female</label><br><br>
    <input type="submit" name="submit" value="Submit">
</form>