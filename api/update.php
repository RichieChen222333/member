<?php
require_once 'conn.php';

$ID = $_POST["ID"];
$Name = $_POST["Name"];
$Sex = $_POST["Sex"];
$Bday = $_POST["Bday"];
$Addr = $_POST["Addr"];


$sql = 'UPDATE userdata SET Name="'.$Name.'", Sex="'.$Sex.'", Bday="'.$Bday.'", Addr="'.$Addr.'" WHERE ID='.$ID;

if(mysqli_query($conn, $sql))
	echo "更新成功";
else
	echo "更新失敗";

mysqli_close($conn);
?>