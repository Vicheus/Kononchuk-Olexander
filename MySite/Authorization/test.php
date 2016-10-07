<?php
/**
 * Created by PhpStorm.
 * User: shura
 * Date: 03.10.16
 * Time: 17:54
 */
namespace Authorization;

require_once __DIR__ . '/../classes.php';

$a = new Login();
$a->getDateArray(7, '01.08.2016', ['06.08.2016', '07.08.2016']);