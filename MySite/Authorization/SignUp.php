<?php

namespace Authorization;

require_once __DIR__ . '/../classes.php';

$user = new Login();
$user->regUser($_POST['password'], $_POST['username'], $_POST['email']);
