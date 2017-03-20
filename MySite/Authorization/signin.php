<?php

namespace Authorization;

use CustomClasses\Session;
use CustomClasses\Validation;

require_once __DIR__ . '/../classes.php';

$user = new Login();
$validation = new Validation();
if (!$_POST['usernameLogin'] || !$_POST['passwordLogin']) {
	echo $validation->validationSignin($_POST['usernameLogin'], $_POST['passwordLogin']);
} else {
	echo $user->checkUser($_POST['usernameLogin'], $_POST['passwordLogin']);
}

