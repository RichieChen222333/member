<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Document</title>
	<link rel="stylesheet" href="jquerymobile/jquery.mobile-1.4.5.min.css">
	<script src="jquerymobile/jquery-2.1.0.min.js"></script>
	<script src="jquerymobile/jquery.mobile-1.4.5.min.js"></script>
	<script>
	$(function(){
		$("#btn").bin("click", show);
	});	
	function show(){
		alert($("#btn").data("name"));
	}
	</script>
	
</head>
<body>
	<div data-role="page">
		<div data-role="header">
			<h3>頁首</h3>
		</div>
		<div role="main" class="ui-content">
			<a href="#" data-role="button" data-theme="b" data-icon="check" id="btn" data-name="123">送出</a>
		</div>
		<div data-role="footer" data-position="fixed">
			<h3>頁尾</h3>
		</div>
	</div>
</body>
</html>