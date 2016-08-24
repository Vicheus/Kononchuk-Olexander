<?php
namespace index;
/**
* 
*/
class LogIn extends mysqli
{
  function __construct($db_host, $db_username, $db_password)
  {
    $con = mysql_connect($db_host, $db_username, $db_password, $db_name);
    if ($con) {
      echo "Connection to the database is successful";
    }
    else {
      echo "Connection error" . mysql_error();
    }
    mysqli_select_db($con, $db_name) or die("Can not connected to DB");
  }
  protected $username = $_POST['userName'];
  protected $password = $_POST['password'];
  protected $res = new array();
  public function formValidation($query) {
    if (!$this->username) {
      echo "You must input your username first";
    }
    elseif (!$this->password) {
      echo "You must input your password first";
    }
    else {
      echo "Login successful";
    }
  }
}

?>