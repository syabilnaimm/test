<?php
$servername = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "ict600db";

$conn = mysql_connect($servername, $dbusername, $dbpassword, $dbname) or die("Error connecting to database");

if (!$conn) {
    die("Connection failed " . mysql_connect_error());
}
