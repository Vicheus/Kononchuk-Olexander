<?php
/**
 * Created by PhpStorm.
 * User: shura
 * Date: 13.09.16
 * Time: 13:38
 */
namespace Account;

use Authorization\Login;

require_once __DIR__ . '/../classes.php';

class Account extends Login {
    public function formValidation ($paramFirstName, $paramSurname, $paramCity) {
        if (!isset($paramFirstName) || !isset($paramSurname) || !isset($paramCity)) {
            echo "All required fields must be filled";
        }
        else {
            return true;
        }
    }
    public function addDataToAccount ($paramFirstName, $paramSurname, $paramAddress, $paramCity) {
        if ($this->formValidation($paramFirstName, $paramSurname, $paramCity)) {
            $sql = "UPDATE account";
        }
    }
}
//$a = new Account();
//$a->formValidation($_POST['firstName'], $_POST['surname'], $_POST['city']);