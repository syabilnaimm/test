<?php
$servername = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "ict600db";

$conn = mysqli_connect($servername, $dbusername, $dbpassword, $dbname) or die("Error connecting to database");

if (!$conn) {
    die("Connection failed " . mysqli_connect_error());
}
