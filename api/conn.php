<?php
$servername = "localhost";//主機名稱
$username = "J200";//主機帳號
$password = "123456";//主機密碼
$dbname = "member";//資料庫名稱

$conn = mysqli_connect($servername, $username, $password, $dbname);

if(!$conn)
	die("連線失敗".mysqli_connect_error());


?>