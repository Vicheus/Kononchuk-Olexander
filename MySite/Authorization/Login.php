<?php
namespace Authorization;

require_once __DIR__ . '/../classes.php';

class Login 
{
//class SignUp
	const DB_USERNAME = "root";
    const DB_PASSWORD = "root";
    const DB_HOST= "localhost";
    const DB_NAME= "login";

    /**
     * @var \mysqli
     */
    public $conn;

    /**
    * @var string
    **/
    public $message;

    /**
     * SignUp constructor.
     */
    public function __construct()
    {
        $this->conn = new \mysqli (self::DB_HOST, self::DB_USERNAME, self::DB_PASSWORD, self::DB_NAME);
        //check connection
        if ($this->conn->connect_error)
        {
            echo "Connection error" . $this->conn->connect_error;
        }
        else {
            $this->conn->select_db(self::DB_NAME);
        }

        return $this->conn;

    }

    /***
     * @param $password
     * @param $username
     * @param $email
     * @return bool
     */
    public function regUser ($password, $username, $email)
    {
        if (!$username) {
            echo "You must input username first";
        }
        elseif (!$password) {
            echo "You must input password first";
        }
        elseif (!$email) {
            echo "You must input email first";
        }
        $password = password_hash($password, PASSWORD_BCRYPT);
        $sqlName = "SELECT * FROM users WHERE user_name = '$username';";
        $sqlEmail = "SELECT * FROM users WHERE user_email = '$email';";
        $checkName = $this->conn->query($sqlName);
        $checkEmail = $this->conn->query($sqlEmail);
        $countRowName = $checkName->num_rows;
        $countRowEmail = $checkEmail->num_rows;
        $validateEmail = filter_var($email, FILTER_VALIDATE_EMAIL);
        if ($countRowName == 0 && $countRowEmail == 0 && $validateEmail) {
            $sql1 = "INSERT INTO users (user_name, user_pass, user_email) VALUES ('$username', '$password', '$email');";
            $this->conn->query($sql1) or die($this->conn->error);
            header("Location: http://localhost:8000/SignIn.html");
        }
        elseif ($countRowName != 0) {
            echo "Sorry but user with name = " . $username . " is already exists";
        }
        elseif ($countRowEmail != 0) {
            echo "Sorry but user with email = " . $email . " is already exists";
        }
        elseif (!$validateEmail) {
            echo "Sorry but you have input incorrect email";
        }
    }

	public function fieldsIsNotEmpty ($usrnm, $pass) 
	{
		if (!$usrnm) {
			$this->message = "You should input your username first";
		}
		elseif (!$pass) {
			$this->message = "You should input your password first";
		}
		return $this->message;
	}
    public function checkUser ($usrnm, $pass)
    {
        $sql = "SELECT user_name, user_pass FROM users WHERE user_name = '$usrnm'";
        $check = $this->conn->query($sql)->fetch_assoc();
        if (!$check) {
        	echo "User with such username is not exists";
        }
        else {
	        if (password_verify($pass, $check['user_pass']) == TRUE) {
	        	header('Location: http://www.google.com');
	        }
	        else {
	        	echo "This is invalid password";
	        }
	    }
	}
}

?>