<?php

session_start();
$servername = "127.0.0.1:3306";
$username = "u945305463_girik";
$password = "fundforyou";
$dbname="u945305463_fund4";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);


header("Cache-Control: no-cache, no-store, must-revalidate");
header("Pragma: no-cache");
header("Expires: 0");
//
// Check connection
// if ($conn->connect_error) {
//     die("Connection failed: " . $conn->connect_error);
// }else {
//   echo "Connected successfully";

//}
?>
