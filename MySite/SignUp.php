<?php
/**
 * Created by PhpStorm.
 * User: shura
 * Date: 23.08.16
 * Time: 18:11
 */

namespace SignUp;

class SignUp
{

    const DB_USERNAME = "root";
    const DB_PASSWORD = "root";
    const DB_HOST= "localhost";
    const DB_NAME= "login";

    /**
     * @var \mysqli
     */
    public $conn;

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
    public function reg_user ($password, $username, $email)
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

}

    $user = new SignUp();
    $user->reg_user($_POST['password'], $_POST['username'], $_POST['email']);
