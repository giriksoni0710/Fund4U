<?php

include('connection.php');
// Check connection
if(is_array($_POST)){
  foreach ($_POST as $key => $value) {
    $key = $key;
    $$key = mysqli_real_escape_string($conn,(htmlentities($value)));
  
      echo $$key;
  }
}


$sql = "INSERT INTO backer_details (uid,pid,f_name, l_name, email, fund_amount, date_created) VALUES ('{$idd}','{$pid}','{$f_name}','{$l_name}','{$email}','{$fund_amount}',NOW())";

$result=mysqli_query($conn, $sql);

if($result){

  echo 1;
}
else {

    echo $sql;
}

//
// echo "$sql";


?>
