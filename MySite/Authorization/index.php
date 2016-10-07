<?php
/**
 * Created by PhpStorm.
 * User: shura
 * Date: 28.09.16
 * Time: 18:45
 */
require_once __DIR__ . '/../classes.php';

use Templates\Templates;

$twig = new Templates();
echo $twig->environment->render('signup.twig', array());