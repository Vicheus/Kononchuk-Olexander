
<?php
/*
$phpVersion = phpversion ();
echo "Current php version is " . $phpVersion . "<br/>";
$firstString = 'Tomorrow I \'ll learn PHP global variables.';
$secondString = 'This is a bad command : del c:\\*.*<br/>';
echo $firstString ."<br/>";
echo $secondString . "<br/>";
//making an anchor on the title
$titleAnchor = '<a href=index.php>PHP Tutorial</a>';
echo "<h3>" . $titleAnchor . "</h3>";
echo "PHP, an acronym for Hypertext Preprocessor, is a widely-used open source general-purpose scripting language. It is a cross-platform, HTML embedded server-side scripting language and is especially suited for web development.";
?>
<!--
Creating simple form, with only field - user name and submit button
-->
<!DOCTYPE html>  
<html>  
<head>  
	<title></title>  
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">  
	</head>  
	<body>
		<form action="index.php", method="GET">
		<lable>
		Please input your name: <input type="text" name="userName">
		</lable>
		<input type='submit' name='Submit'>
		</form>
	</body>
</html>
<?php
//Print username that has been input in the form
$userName = $_GET['userName'];
echo '<h3>' . $userName . '</h3>';

//whether ip is from share internet  
if (!empty($_SERVER['HTTP_CLIENT_IP']))     
  {  
    $ip_address = $_SERVER['HTTP_CLIENT_IP'];  
  }  
//whether ip is from proxy  
elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))    
  {  
    $ip_address = $_SERVER['HTTP_X_FORWARDED_FOR'];  
  }  
//whether ip is from remote address  
else  
  {  
    $ip_address = $_SERVER['REMOTE_ADDR'];  
  }  
echo 'Your IP address is: ' . $ip_address . '<br/>'; 
//getting information about user aget (browser version, platform)
$clientAgent = $_SERVER['HTTP_USER_AGENT'];
echo 'You are currently using: ' . $clientAgent . '<br/>';
//getting information about current file name
$filename = basename(__FILE__);
echo 'Current file name is: ' . $filename . '<br/>';
//dropping the string by the delimeter
$url = 'http://www.w3resource.com/php-exercises/php-basic-exercises.php';
//$listOfElements = array('scheme', 'host', 'path');
$components = parse_url($url);
echo 'Scheme: ' . $components['scheme'] . '<br/>';
echo 'Host: ' . $components['host'] . '<br/>';
echo 'Path: ' . $components['path'] . '<br/>';
if (isset($_SERVER['HTTP'])) {
	echo 'You are using http schema';
}
else {
	echo 'You are using https schema';
}
*/

$db_username = "root";
$db_password = "Vicheus4238366";
$db_host = "localhost";
$db_name = "login";

$conn = new mysqli ($db_host, $db_username, $db_password);
//check connection
if ($conn->connect_error) {
	echo "Connection error" . $conn->connect_error;
}
//create database
$sql = "CREATE DATABASE login";
if ($conn->query($sql) === TRUE) {
    echo "Database created successfully";
} else {
    echo "Error creating database: " . $conn->error;
}


if ($conn->query("USE login;") === TRUE) {
	echo "DB login used successfully</br>";
}
else {
	echo "Error using DB: " .$conn->error . "</br>";
}

$conn->query("DROP TABLE authenticate;");
//create table authenticate
$sql = "CREATE TABLE authenticate (
	id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	username VARCHAR(30) NOT NULL,
	password VARCHAR(30) NOT NULL)";

if ($conn->query($sql) === TRUE) {
	echo "Table authenticate created successfully </br>";
}
else {
	echo "Error creating table: " .$conn->error . "</br>";
}
$conn->close();

$username = $_POST['userName'];
$password = $_POST['password'];
echo "User name is: " . $username . "</br>";
echo "User password is: " . $password . "</br>";

if ($conn->query("INSERT INTO authenticate(username, password) VALUES('$username', '$password');") !== TRUE) {
	echo "Error: " .$conn->error . "</br>";
}
$conn->close();




?>



 


