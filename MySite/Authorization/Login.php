<?php
namespace Authorization;

use CustomClasses\Session;

require_once __DIR__ . '/../classes.php';

use CustomClasses\MyDatabase;

class Login
{
    /**
     * @var MyDatabase
     */
    public $myConn;

    public function __construct()
    {
        $this->myConn = new MyDatabase();
        return $this->myConn;
    }

    /**
     * @var string
     **/
    public $message;

    /***
     * @param $password
     * @param $username
     * @param $email
     * @return bool
     */
    public function regUser ($username, $password, $email)
    {
        if (!$username) {
            echo "You must input username first" . "<br />";
        } elseif (!$password) {
            echo "You must input password first" . "<br />";
        } elseif (!$email) {
            echo "You must input email first" . "<br />";
        }
        $password = password_hash($password, PASSWORD_BCRYPT);
        $sqlName = "SELECT * FROM users WHERE user_name = ?;";
        $sqlEmail = "SELECT * FROM users WHERE user_email = ?;";
        $tempArray1 = array("s", "$username");
        $tempArray2 = array("s", "$password");
        $checkName = $this->myConn->executeSqlAndReturnArray($sqlName, $tempArray1);
        $checkEmail = $this->myConn->executeSqlAndReturnArray($sqlEmail, $tempArray2);
        $countRowName = $checkName->num_rows;
        $countRowEmail = $checkEmail->num_rows;
        $validateEmail = filter_var($email, FILTER_VALIDATE_EMAIL);
        if ($countRowName == 0 && $countRowEmail == 0 && $validateEmail) {
            $sql1 = "INSERT INTO users (user_name, user_pass, user_email) VALUES (?, ?, ?);";
            $array = array("sss", "$username", "$password", "$email");
            $this->myConn->executeSqlAndReturnArray($sql1, $array);
            header("Location: http://localhost:8000/Authorization/SignIn.html");
        } elseif ($countRowName != 0) {
            echo "Sorry but user with name = " . $username . " is already exists" . "<br />";
        } elseif ($countRowEmail != 0) {
            echo "Sorry but user with email = " . $email . " is already exists" . "<br />";
        } elseif (!$validateEmail) {
            echo "Sorry but you have input incorrect email" . "<br />";
        }
    }

    /**
     * @param $usrnm
     * @param $pass
     * @return string
     */
    public function fieldsIsNotEmpty ($usrnm, $pass)
	{
		if (!$usrnm) {
			$this->message = "You should input your username first" . "<br />";
		} elseif (!$pass) {
			$this->message = "You should input your password first" . "<br />";
		}

		return $this->message;
	}

    /**
     * @param $usrnm
     * @param $pass
     * @return array
     */
	public function checkUser ($usrnm, $pass)
    {
        $session = new Session();
        $sql = "SELECT user_name, user_pass, user_id FROM users WHERE user_name = ?";
        $a = array("s", "$usrnm");
        $check = $this->myConn->executeSqlAndReturnArray($sql, $a)->fetch_assoc();
        $session->set('user', $check);
        if (!$check) {
        	echo "User with such username is not exists" . "<br />";
        } else {
	        if (password_verify($pass, $check['user_pass']) == TRUE) {
	        	header('Location: http://localhost:8000/Account/account.html');
	        } else {
	        	echo "This is invalid password" . "<br />";
	        }
	    }
	}
}

?>