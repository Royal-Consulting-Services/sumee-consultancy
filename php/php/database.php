<?php

$servername = "localhost";
$username   = "root";
$password   = "";
$dbName     = "user";
$conn = new mysqli($servername, $username, $password, $dbName);

if ($conn->connect_error) {
  die("Error connecting MySQL: " . $conn->connect_error);
}



?>
