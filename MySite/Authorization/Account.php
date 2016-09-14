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
use CustomClasses\MyDatabase;

require_once __DIR__ . '/../classes.php';

class Account extends Login {
    public function formValidation ($paramFirstName, $paramSurname, $paramCity) {
        if (!$paramFirstName || !$paramSurname || !$paramCity) {
            echo "All required fields must be filled";
        }
        else {
            return true;
        }
    }
    public function addDataToAccount ($paramFirstName, $paramSurname, $paramAddress, $paramCity) {
        if ($this->formValidation($paramFirstName, $paramSurname, $paramCity)) {
            $session = new Session();
            $id = $session->get('user', 'user_id');
            $sql = "INSERT INTO user_account (user_id, first_name, surname, address, city) VALUES (?, ?, ?, ?, ?)";
            $tempArray = array("issss", "$id", "$paramFirstName", "$paramSurname", "$paramAddress", "$paramCity");
            $userAccountId = $this->myConn->conn->query("SELECT user_id FROM user_account WHERE user_id = {$id};");
            if (isset($userAccountId)) {
                return false;
            }
            else {
                $this->myConn->executeSqlAndReturnArray($sql, $tempArray);
            }

        }
    }
}
$a = new Account();
$a->formValidation($_POST['firstName'], $_POST['surname'], $_POST['city']);
//$a->addDataToAccount($_POST['firstName'], $_POST['surname'], $_POST['address'], $_POST['city']);