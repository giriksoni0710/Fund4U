<?php
include('connection.php');
// Check connection
// INNER JOIN backer_details ON Project_details.id=backer_details.pid)
    

$sql = "SELECT Project_details.date_created,Project_details.p_name,user_table.id FROM (Project_details 
    INNER JOIN user_table ON user_table.id=Project_details.uid)
    WHERE user_table.id=Project_details.uid";



$result=mysqli_query($conn, $sql);



$op3= "";

$rows= array();
$op= "";
$op1= "";
// $date_create = "";
$date_create= array();


if($result){

while($row =mysqli_fetch_assoc($result)){
    
    
    // array.push(); 
    
    
    // $date_create = strtotime($row['date_created']);
    
    // echo $date_create;
        $date_create= strtotime($row['date_created']);

    $rows[]=$row;
        
    array_push($rows,"date_create:".$date_create);
    
    // $lmn[]=$date_create;
    
    
    
    // $date_create[]=."date_create:".strtotime($row['date_created']);

}
// echo $date_create;exit;

    
    // echo strtotime('3 October 2005'); exit;


// echo(strtotime('3 October 2005'));exit;

// $snn = $_session['user'];
// array_push($rows,$snn);

// echo $enddate;exit;
$op= json_encode($rows);
// $op1=json_encode($lmn);

// $merge=$op+$op1;

// $op3=array_merge($rows,$date_create);
// $op3 = json_encode($op3);
// echo $op3;exit;

// echo $op3;
// echo $op1;
echo $op;
//echo '<img src="data:image/jpeg;base64,'.base64_encode($row['p_image'] ).'">';
    
}
else{
    echo "nAAAA";
}
    