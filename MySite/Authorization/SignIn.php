<?php

namespace Authorization;

require_once __DIR__ . '/../classes.php';


$a = new Login();
if ($a->fieldsIsNotEmpty($_POST['usernameLogin'], $_POST['passwordLogin'])) {
	echo "$a->message";
}
else {
	$a->checkUser($_POST['usernameLogin'], $_POST['passwordLogin']);
}

