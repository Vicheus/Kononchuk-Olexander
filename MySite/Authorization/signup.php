<?php

namespace Authorization;

use CustomClasses\Validation;

require_once __DIR__ . '/../classes.php';

$user = new Login();
$validation = new Validation();
if (!$_POST['username'] || !$_POST['password'] || !$_POST['email']) {
    echo $validation->validationSignup($_POST['username'], $_POST['password'], $_POST['email']);
} else {
    echo $user->regUser( $_POST['username'], $_POST['password'], $_POST['email']);
}
