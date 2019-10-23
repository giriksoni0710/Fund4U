<?php
require_once('connection.php');

unset($_SESSION['user']);




if(PHP_SESSION_ACTIVE == TRUE)
{
    echo 1;
session_destroy();
    
}else{
    echo "0";
}


 ?>
