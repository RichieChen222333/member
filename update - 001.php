<?php
require_once './api/conn.php';
$sql = 'SELECT * FROM userdata WHERE ID='.$_GET["ID"];
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);

?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Document</title>
	<link rel="stylesheet" href="css/jquery.mobile-1.4.5.min.css">
	<script src="js/jquery-2.1.0.min.js"></script>
	<script src="js/jquery.mobile-1.4.5.min.js"></script>
	<script>
		$(function(){
			$("#update_btn").bind("click", update);
		});
		function update(){
			$.ajax({
				type: "POST",
				url: "http://localhost/member/api/update.php",
				data: {ID: $(this).data("id"), Name: $("#name").val(), Sex: $("#sex").val(), Bday: $("#bday").val(), Addr: $("#addr").val() },
				success: showdata,
				error: function(){
					alert("error");
				}
			});
		}
		function showdata(data){
			alert(data);
			window.location = './list.html';
		}
	</script>
</head>
<body>
	<div data-role="page">
		<div data-role="header">
			<h3>更新會員</h3>
		</div>
		<div role="main" class="ui-content">
			<div data-role="fieldcontain">
				<label for="name">姓名:</label>
				<input type="text" id="name" name="name" value="<?php echo $row["Name"] ?>">
			</div>	
			<div data-role="fieldcontain">
				<label for="sex">性別:</label>
				<select name="sex" id="sex" data-role="slider" value="<?php echo $row["Sex"] ?>">
					<?php  
						if($row["Sex"] == "男"){
							echo '<option value="男" selected="selected">男</option>
				    				<option value="女">女</option>';
						}else if($row["Sex"] == "女"){
								echo '<option value="男" >男</option>
				    				<option value="女" selected="selected">女</option>';
						}
					?>										    
				</select>
			</div>

			<div data-role="fieldcontain">
				<label for="bday">生日:</label>
				<input type="date" id="bday" name="bday" value="<?php echo $row["Bday"] ?>">
			</div>		
			<div data-role="fieldcontain">
				<label for="addr">住址:</label>
				<input type="text" id="addr" name="addr" value="<?php echo $row["Addr"] ?>">
			</div>		
			<div class="ui-grid-a">
				<div class="ui-block-a">
					<a href="#" data-role="button" data-theme="b" data-icon="delete">取消</a>
				</div>
				<div class="ui-block-b">
					<a href="#" data-role="button" data-theme="b" data-icon="check" id="update_btn" data-id="<?php echo $row["ID"] ?>">確認</a>
				</div>
			</div>
		</div>
	</div>
</body>
</html>
<?php mysqli_close($conn); ?>