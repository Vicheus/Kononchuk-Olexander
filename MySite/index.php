<?php

$db_username = "root";
$db_password = "root";
$db_host = "localhost";
$db_name = "login";

$conn = new mysqli ($db_host, $db_username, $db_password);
//check connection
if ($conn->connect_error)
{
echo "Connection error" . $conn->connect_error;
}

/*
//create database
$sql = "CREATE DATABASE login";
if ($conn->query($sql) === TRUE) {
    echo "Database created successfully";
} else {
    echo "Error creating database: " . $conn->error;
}
*/

mysqli_select_db($conn, "login") or die("Can not connected to DB");
/*

//create table authenticate
$sql = "CREATE TABLE authenticate (
	id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	username VARCHAR(30) NOT NULL,
	password VARCHAR(30) NOT NULL)";

if ($conn->query($sql) === TRUE) {
    echo "Table authenticate created successfully </br>";
} else {
    echo "Error creating table: " . $conn->error . "</br>";
}
*/

$username = $_POST['userName'];
$password = $_POST['password'];
if (!$username) {
    echo "You must input your username first";
}
elseif (!$password) {
    echo "You must input your password first";
}
else {
    echo "User name is: " . $username . "</br>";
    echo "User password is: " . $password . "</br>";
    //check if user already exists
    $res = $conn->query("SELECT user_name, user_password FROM authenticate ORDER BY id ASC");
    $n = 0; //variable for checking whether the user is already exists
    while ($row = $res->fetch_assoc()) {
        echo "<p> username : " . $row['user_name'] . ", password : " . $row['user_password'] . "</p>";
        if (in_array($username, $row) or in_array($password, $row)) {
            $n += 1;
        }
    }
    echo $n;

    if ($n == 0) {
        $conn->query("INSERT INTO authenticate(user_name, user_password) VALUES('$username', '$password');");
        echo "Log in successful";
    } else {
        echo "User with such credentials is already exists";
    }
}
$conn->close();
?>