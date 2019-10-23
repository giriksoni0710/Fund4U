<?php
include("connection.php");
// echo "hello";
if($_POST['id'])
{
  $id = $_POST['id'];
}

$sql = "SELECT * FROM Project_details WHERE id=".$id;
// echo $id; exit;
$result = mysqli_query($conn, $sql);
$rows = array();
$op = "";

if($result)
{
    while($row=mysqli_fetch_assoc($result))
    {
         $rows[]=$row;
    }
    $op= json_encode($rows);
    echo $op;
}else{
    echo 'not done';
}

?>
