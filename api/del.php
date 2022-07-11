<?php 
require_once 'conn.php';

$sql = "DELETE FROM userdata WHERE ID=".$_GET["ID"];
if(mysqli_query($conn, $sql))
	echo '<script>window.location = "../list.html";</script>';

else
	echo "刪除會員失敗";

mysqli_close($conn);
?>