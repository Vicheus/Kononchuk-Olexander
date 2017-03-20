<?php
/**
 * Created by PhpStorm.
 * User: shura
 * Date: 08.09.16
 * Time: 11:21
 */
namespace Authorization\tester;

use Authorization\Session;

require_once __DIR__ . '/../../classes.php';

$sessionTest = new Session();
$array = ['name' => 'Shura', 'pass' => '4238366', 'id' => '3'];
$sessionTest->set('user', $array);
$sessionTest->destroy();

