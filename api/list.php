<?php 
require_once 'conn.php';

$sql = "SELECT * FROM userdata ORDER BY ID DESC";
$result = mysqli_query($conn, $sql);

echo '<table><tr><th>姓名</th><th>性別</th><th>生日</th><th>住址</th><th></th><th></th></tr>';

if(mysqli_num_rows($result) >0 ){
	while($row = mysqli_fetch_assoc($result)){
		echo '<tr><td>'.$row["Name"].'</td><td>'.$row["Sex"].'</td><td>'.$row["Bday"].'</td><td>'.$row["Addr"].'</td><td><button onclick="send_api_del('.$row["ID"].')" id="del_btn">刪除</button></td><td><button onclick="send_api_update('.$row["ID"].')" id="del_btn">更新</button></td></tr>';
	}
}else{
	echo "無會員資料";
}

echo '</table>';

mysqli_close($conn);
?>

