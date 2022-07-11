<?php  	
require_once 'conn.php';

$name = $_POST["name"];
$sex = $_POST["sex"];
$bday = $_POST["bday"];
$addr = $_POST["addr"];

$sql = "INSERT INTO userdata(ID, Name, Sex, Bday, Addr) values('', '$name','$sex','$bday','$addr')";

if(mysqli_query($conn, $sql))
	echo "新增".$name."會員成功";
else
	echo "新增".$name."會員失敗";

mysqli_close($conn);
?>