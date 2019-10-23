<?php

include('connection.php');

// Check connection
if(is_array($_POST)){
  foreach ($_POST as $key => $value) {
    $key = $key;
    $$key = mysqli_real_escape_string($conn,(htmlentities($value)));

    
           }
}

$sql = "INSERT INTO Project_details (uid,p_name,p_category,p_country,p_desc,fund_goal,p_video,p_image,p_bank_acnt,p_bank_branch,p_addn_details,date_created) VALUES ('{$idd}','{$p_name}','{$p_category}','{$p_country}','{$p_desc}','{$fund_goal}','{$p_video}','{$p_image}','{$p_bank_acnt}','{$p_bank_branch}','{$p_addn_details}',NOW())";


$result=mysqli_query($conn, $sql);

if($result){

  echo "done";
}
else {

    echo "not done";
}


// $uploaddir = '/uploads/';

// $file = str_replace('\\','/',$p_image);

// $fileName=basename($file);

// $uploadfile = $uploaddir . $fileName;

// move_uploaded_file($_FILES[$p_image]['tmp_name'], $uploadfile);
// // echo $uploadfile;exit; 
// // echo "<p>";


// if (move_uploaded_file($_FILES[$p_image]['tmp_name'], $uploadfile)) {
//   echo "File is valid, and was successfully uploaded.\n";
// } else {
//   echo "Upload failed";
// }
// exit;

// if(isset($_POST[p_image])){

// $statusMsg = '';

// // File upload path
// $targetDir = "http://crazy4web.com/uploads/";

// $file = str_replace('\\','/',$p_image);


// $fileName=basename($file);

// $targetFilePath = $targetDir.$fileName;
// $fileType = pathinfo($targetFilePath,PATHINFO_EXTENSION);
// $allowTypes = array('jpg','png','jpeg','gif','pdf');


// }

// //Get the content of the image and then add slashes to it 
// $imagetmp=addslashes (file_get_contents($_FILES['image']['tmp_name']));
// echo $_FILES;
// exit;

// $abc = "1"; 

// $file = addslashes(file_get_contents($_FILES["image"]["tmp_name"]));

// echo $file;exit;



?>
