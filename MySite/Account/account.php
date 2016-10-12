<?php
/**
 * Created by PhpStorm.
 * User: shura
 * Date: 15.09.16
 * Time: 13:18
 */
namespace Account;

use CustomClasses\Validation;

require_once __DIR__ . '/../classes.php';

$account = new Account();
$validation = new Validation();

if (isset($_POST['updateAccount'])) {
    $account->checkAuthorizationOfUser();
    if (!$_POST['firstName'] || !$_POST['surname'] || !$_POST['city']) {
        echo $validation->validationAccount($_POST['firstName'], $_POST['surname'], $_POST['address'], $_POST['city']);
    } else {
        $account->addDataToAccount($_POST['firstName'], $_POST['surname'], $_POST['address'], $_POST['city']);
    }
} elseif (isset($_POST['changePassword'])) {
    echo $account->changePassword($_POST['newPassword'], $_POST['confirmNewPassword'], $_POST['oldPassword']);
} elseif (isset($_POST['deleteAccount'])) {
    echo $account->deleteAccount();
}