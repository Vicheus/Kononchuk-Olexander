<?php
/**
 * Created by PhpStorm.
 * User: shura
 * Date: 14.09.16
 * Time: 13:21
 */
namespace CustomClasses;

require_once __DIR__ . '/../classes.php';

class MyDatabase {

    const DB_USERNAME = "root";
    const DB_PASSWORD = "root";
    const DB_HOST= "localhost";
    const DB_NAME= "shura";

    /**
     * @var \mysqli
     */
    public $conn;



    /**
     * SignUp constructor.
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

    public function executeSqlAndReturnArray ($paramSql, $paramArray) {
        $res = $this->conn->prepare($paramSql);
        $ref = new \ReflectionClass('mysqli_stmt');
        $method = $ref->getMethod('bind_param');
        $method->invokeArgs($res, $paramArray);
        $res->execute();
        $resultArray = $res->get_result();
        return $resultArray;
    }

}
