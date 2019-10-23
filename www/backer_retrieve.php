<?php
include('connection.php');


$sql = "SELECT backer_details.fund_amount,Project_details.p_name,Project_details.id,backer_details.pid,backer_details.uid FROM (backer_details INNER JOIN Project_details ON backer_details.pid=Project_details.id) where backer_details.pid=Project_details.id";



$result=mysqli_query($conn, $sql);



// $op3= "";

$rows= array();
$op= "";
// $op1= "";
// $date_create= array();


if($result){

while($row =mysqli_fetch_assoc($result)){
    
        // $date_create= strtotime($row['date_created']);

    $rows[]=$row;
        
    // array_push($rows,"date_create:".$date_create);
    

}
// echo $enddate;exit;
$op= json_encode($rows);
echo $op;

}
else{
    echo "nAAAA";
}
    