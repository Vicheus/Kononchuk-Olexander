<?php

namespace Authorization;

require_once __DIR__ . '/../classes.php';

class SignIn extends SignUp
{
    public function checkUser ($usernameLogin, $passwordLogin)
    {
        $sql = "SELECT user_name, user_pass FROM users WHERE user_name = '$usernameLogin'";

        $check = $this->conn->query($sql)->fetch_assoc();
        var_dump($check['user_name']);

    }
}


$a = new SignIn();
$a->checkUser($_POST['usernameLogin'], $_POST['passwordLogin']);
