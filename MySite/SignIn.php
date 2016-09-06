<?php
/**
 * Created by PhpStorm.
 * User: shura
 * Date: 05.09.16
 * Time: 09:12
 */
namespace SignIn;

use SignUp\SignUp;

class SignIn
{
    const DB_USERNAME = "root";
    const DB_PASSWORD = "root";
    const DB_HOST= "localhost";
    const DB_NAME= "login";

    /**
     * @var \mysqli
     */
    public $conn;

    /**
     * SignIn constructor.
     */
    public function __construct()
    {
        $this->conn = new \mysqli (self::DB_HOST, self::DB_USERNAME, self::DB_PASSWORD, self::DB_NAME);
        //check connection
        if ($this->conn->connect_error)
        {
            echo "Connection error" . $this->conn->connect_error;
        }
        else {
            $this->conn->select_db(self::DB_NAME);
        }

        return $this->conn;

    }
}