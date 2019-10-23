<?php
include('connection.php');
// Check connection


$sql = "SELECT * FROM Project_details ORDER BY id desc";

$result=mysqli_query($conn, $sql);

$rows= array();
// $image=array("image1"=>"1","image2"=>"2","image3"=>"3","image4"=>"4","image5"=>"5","image6"=>"6","image7"=>"7","image8"=>"8","image9"=>"9","image10"=>"10");
$op= "";


if($result){

while($row =mysqli_fetch_assoc($result)){
    
    $rows[]=$row;
}
// $snn = $_session['user'];
// array_push($rows,$snn);

// $xyz= array_merge($image,$rows);
$op= json_encode($rows);
echo $op;

//echo '<img src="data:image/jpeg;base64,'.base64_encode($row['p_image'] ).'">';
    
}
else{
    echo "no data";
}


?>
