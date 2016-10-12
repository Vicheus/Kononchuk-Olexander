<?php
/**
 * Created by PhpStorm.
 * User: shura
 * Date: 13.09.16
 * Time: 13:38
 */
namespace Account;

use Authorization\Login;
use CustomClasses\Session;

require_once __DIR__ . '/../classes.php';

class Account extends Login {

    /**
     * @var
     */
    public $id;

    /**
     * @var
     */
    public $validator;

    public function __construct()
    {
        parent::__construct();
        $this->id = ($this->session->get('user', 'user_id'));
    }

    /**
     * @return bool
     */
    public function checkAuthorizationOfUser ()
    {
        if (!$this->id) {
            header("Location: http://localhost:8000/Authorization/signin.html");
        } else {
            return $this->id;
        }
    }

    /**
     * @param $paramFirstName
     * @param $paramSurname
     * @param $paramAddress
     * @param $paramCity
     * @return string
     */
    public function addDataToAccount ($paramFirstName, $paramSurname, $paramAddress, $paramCity)
    {
            $sql = "INSERT INTO user_account (user_id, first_name, surname, address, city) VALUES (?, ?, ?, ?, ?)";
            $tempArray = array("issss", "$this->id", "$paramFirstName", "$paramSurname", "$paramAddress", "$paramCity");
            $userAccountId = $this->myConn->conn->query("SELECT user_id FROM user_account WHERE user_id = {$this->id};")->fetch_assoc();
            if (!isset($userAccountId['user_id'])) {
                $this->myConn->executeSqlAndReturnArray($sql, $tempArray);
                echo $this->twig->environment->render('account.twig', array('message' => "Your account was updated successfully"));
            } else {
                echo $this->twig->environment->render('account.twig', array('errorMessage' => "You have been already created an account"));
            }
    }

    /**
     * @param $paramNewPassword
     * @param $paramConfirmNewPassword
     * @param $paramOldPassword
     * @return string
     */
    public function changePassword ($paramNewPassword, $paramConfirmNewPassword, $paramOldPassword)
    {
        $sql = "SELECT user_pass FROM users WHERE user_id = ?;";
        $this->id = ($this->session->get('user', 'user_id'));
        $id = $this->id;
        $tempArray = array("i", "$id");
        $pass = $this->myConn->executeSqlAndReturnArray($sql, $tempArray)->fetch_assoc();
        $chekPassword = password_verify($paramOldPassword, $pass['user_pass']);
        if ($chekPassword && $paramNewPassword && $paramNewPassword === $paramConfirmNewPassword) {
            $sql = "UPDATE users SET user_pass = ? WHERE user_id = $id";
            $newPassword = password_hash($paramNewPassword, PASSWORD_BCRYPT);
            $tempArray = array("s", "$newPassword");
            $this->myConn->executeSqlAndReturnArray($sql, $tempArray);
            return $this->twig->environment->render('account.twig', array('message' => "Your password was updated successfully"));
        } elseif (!$chekPassword) {
            return $this->twig->environment->render('account.twig', array('oldPassword' => "You have input wrong password"));
        } elseif (!$paramNewPassword) {
            return $this->twig->environment->render('account.twig', array('newPassword' => "Field New password should not be empty"));
        } elseif ($paramNewPassword !== $paramConfirmNewPassword) {
            return $this->twig->environment->render('account.twig', array('confirmNewPassword' => "Password you have input into this field is not match New password"));
        } else {
            echo $this->twig->environment->render('account.twig', array('errorMessage' => "Your password was not updated"));
        }
    }

    /**
     *
     */
    public function deleteAccount ()
    {
        $sql1 = "DELETE FROM users WHERE user_id = ?";
        $sql2 = "DELETE FROM user_account WHERE user_id = ?";
        $tempArray = array("i", "$this->id");
        $this->myConn->executeSqlAndReturnArray($sql1, $tempArray);
        $this->myConn->executeSqlAndReturnArray($sql2, $tempArray);
        $f = $this->myConn->conn->query("SELECT * FROM users WHERE user_id = $this->id")->fetch_assoc();
        $s = $this->myConn->conn->query("SELECT * FROM user_account WHERE user_id = $this->id")->fetch_assoc();
        if (!$f['user_id'] && !$s['user_id']) {
            $this->session->destroy();
            return $this->twig->environment->render('signin.twig', array('message' => "Your account was deleted successfully"));
        }
        else {
            return $this->twig->environment->render('account.twig', array('errorMessage' => "Your account was not deleted"));
        }
    }
}
