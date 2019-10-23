<?php
include('connection.php');
// Check connection

$Name = $_POST['uname'];
$Email = $_POST['email'];
$password = $_POST['password'];


$sql = "INSERT INTO user_table (Name,Email,Password) VALUES ('$Name','$Email','$password')";

$result=mysqli_query($conn, $sql);

if($result){

  echo "abc";
  
  
}
else {

    echo "def";
    
}

//
// echo "$sql";


?>
