<?php
/**
 * Created by PhpStorm.
 * User: shura
 * Date: 15.09.16
 * Time: 13:18
 */
namespace Account;

require_once __DIR__ . '/../classes.php';

$a = new Account();
$a->checkAuthorizationOfUser();
if (isset($_POST['updateAccount'])) {
    $a->formValidation($_POST['firstName'], $_POST['surname'], $_POST['city']);
    $a->addDataToAccount($_POST['firstName'], $_POST['surname'], $_POST['address'], $_POST['city']);
}
elseif (isset($_POST['changePassword'])) {
    $a->changePassword($_POST['newPassword'], $_POST['confirmNewPassword'], $_POST['oldPassword']);
}
elseif (isset($_POST['deleteAccount'])) {
    $a->deleteAccount();
}