<?php
/**
 * Created by PhpStorm.
 * User: shura
 * Date: 14.09.16
 * Time: 10:09
 */
namespace CustomClasses;

require_once __DIR__ . '/../classes.php';

class Session {

    public static $sessionStarted = false;

    /**
     * Session constructor.
     */
    public function __construct()
    {
        if (self::$sessionStarted == false) {
            session_start();
            self::$sessionStarted = true;
        }
    }

    /**
     * @param $key
     * @param $value
     */
    public static function set ($key, $value) {
        $_SESSION[$key] = $value;
    }

    /**
     * @param $key
     * @param bool $secondKey
     * @return bool
     */
    public static function get ($key, $secondKey = false) {
        if ($secondKey == true) {
            if (isset($_SESSION[$key][$secondKey])) {
                return $_SESSION[$key][$secondKey];
            }
            else {
                if (isset($_SESSION[$key])) {
                    return $_SESSION[$key];
                }
            }
        }
        return false;
    }

    public static function destroy () {
        session_unset();
        session_destroy();
    }
}