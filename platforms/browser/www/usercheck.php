<?php


if( isset($_POST['username']) and isset($_POST['password']) ) {

  include('connection.php');

		$user=$_POST['username'];
		$pass=$_POST['password'];

		$ret=mysqli_query( $conn, "SELECT * FROM user_table WHERE name='$user' AND password='$pass'");

    $row = mysqli_fetch_assoc($ret);



  	if(!$row) {

echo "user not found";
      	}
		else {

      //header('location: Dashboard.php');
      session_start();
	    $_SESSION['user']=$user;
	    echo $_SESSION['user']."/".$row['id'];
	   


		}
}
?>
