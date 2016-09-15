<?php
/**
 * Created by PhpStorm.
 * User: shura
 * Date: 08.09.16
 * Time: 11:00
 */
require_once __DIR__ .DIRECTORY_SEPARATOR. 'Autoloader/Autoloader.php';
$autoloader = new \Autoloader();
$autoloader->addNamespace('Authorization', __DIR__);
$autoloader->addNamespace('CustomClasses', __DIR__);
$autoloader->addNamespace('Account', __DIR__);
$autoloader->register();