<?php
namespace Authorization;

use CustomClasses\Session;

require_once __DIR__ . '/../classes.php';

use CustomClasses\MyDatabase;
use Templates\Templates;

class Login
{
    /**
     * @var MyDatabase
     */
    public $myConn;

    public function __construct()
    {
        $this->myConn = new MyDatabase();
        $this->twig = new Templates();
    }

    /***
     * @param $password
     * @param $username
     * @param $email
     * @return bool
     */
    public function regUser ($username, $password, $email)
    {
        $password = password_hash($password, PASSWORD_BCRYPT);
        $sqlName = "SELECT * FROM users WHERE user_name = ?;";
        $sqlEmail = "SELECT * FROM users WHERE user_email = ?;";
        $tempArray1 = array("s", "$username");
        $tempArray2 = array("s", "$email");
        $checkName = $this->myConn->executeSqlAndReturnArray($sqlName, $tempArray1);
        $checkEmail = $this->myConn->executeSqlAndReturnArray($sqlEmail, $tempArray2);
        $countRowName = $checkName->num_rows;
        $countRowEmail = $checkEmail->num_rows;
        $validateEmail = filter_var($email, FILTER_VALIDATE_EMAIL);
        if ($countRowName == 0 && $countRowEmail == 0 && $validateEmail) {
            $sql1 = "INSERT INTO users (user_name, user_pass, user_email) VALUES (?, ?, ?);";
            $array = array("sss", "$username", "$password", "$email");
            $this->myConn->executeSqlAndReturnArray($sql1, $array);
            echo $this->twig->environment->render('signin.twig', array());
        } elseif ($countRowName != 0) {
            return $this->twig->environment->render('signup.twig', array('errorMessage' => "Sorry but user with name = " . $username . " is already exists",
                                                                         'emailValue'   => $email));
        } elseif ($countRowEmail != 0) {
            return $this->twig->environment->render('signup.twig', array('errorMessage' => "Sorry but user with email = " . $email . " is already exists",
                                                                         'usernameValue' => $username));
        } elseif (!$validateEmail) {
            return $this->twig->environment->render('signup.twig', array('errorMessage'  => "Sorry but you have input the wrong email",
                                                                         'usernameValue' => $username,
                                                                         'emailValue'    => $email));
        }
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
        if ($check['user_name'] != $usrnm) {
            return $this->twig->environment->render('signin.twig', array('errorMessage' => "User with $usrnm username is not exists"));
        } else {
	        if (password_verify($pass, $check['user_pass']) === true) {
                $session->set('user', $check);
                return $this->twig->environment->render('account.twig', array());
	        } else {
	            return $this->twig->environment->render('signin.twig', array('errorMessage' => "Sorry but you have input wrong password"));
	        }
	    }
	}
}

?>