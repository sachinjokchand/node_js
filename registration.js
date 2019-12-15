<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Login Form Tutorial</title>
		<style>
		.login-form {
			width: 300px;
			margin: 0 auto;
			font-family: Tahoma, Geneva, sans-serif;
		}
		.login-form h1 {
			text-align: center;
			color: #4d4d4d;
			font-size: 24px;
			padding: 20px 0 20px 0;
		}
		.login-form input[type="password"],
		.login-form input[type="email"],
		.login-form input[type="text"] {
			width: 100%;
			padding: 15px;
			border: 1px solid #dddddd;
			margin-bottom: 15px;
			box-sizing:border-box;
		}
		.login-form input[type="submit"] {
			width: 100%;
			padding: 15px;
			background-color: #535b63;
			border: 0;
			box-sizing: border-box;
			cursor: pointer;
			font-weight: bold;
			color: #ffffff;
		}
		</style>
	</head>
	<body>
		<div class="login-form">
			<h1>sign up</h1>
			<form action="/signup" method="POST">
				<input type="text" name="name" placeholder="name" required>
				<input type="text" name="last_name" placeholder="last_name" required>
				<input type="email" name="email" placeholder="email" required>
				<input type="text" name="contact" placeholder="contact" required>
				<input type="password" name="password" placeholder="Password" required>
				<input type="submit">
			</form>
		</div>
	</body>
</html>