<?php
include("connection.php");

$sql = "SELECT Id, Name, Email FROM user_table";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<table><tr><th>ID</th><th>Name</th><th>Email</th></tr>";
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<tr><td>".$row["Id"]."</td><td>".$row["Name"]." ".$row["Email"]."</td></tr>";
    }
    echo "</table>";
} else {
    echo "0 results";
}

?>
