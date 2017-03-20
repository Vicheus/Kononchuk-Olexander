<?php
/**
 * Created by PhpStorm.
 * User: shura
 * Date: 07.10.16
 * Time: 17:05
 */

namespace CustomClasses;

use Authorization\Login;
use Templates\Templates;

require_once __DIR__ . '/../classes.php';


class Validation extends Login
{

    /**
     * @param $username
     * @param $password
     * @param $email
     * @return mixed
     */
    public function validationSignup($username, $password, $email)
    {

        $validator = array();
        if (!$username) {
            $validator['username'] = 'You must input username first';
        } else {
            $validator['usernameValue'] = $username;
        }
        if (!$password) {
            $validator['password'] = 'You must input password first';
        }
        if (!$email) {
            $validator['email'] = 'You must input email first';
        } else {
            $validator['emailValue'] = $email;
        }

        return $this->twig->environment->render('signup.twig', $validator);
    }

    /**
     * @param $usrnm
     * @param $pass
     * @return string
     */
    public function validationSignin ($usrnm, $pass)
    {
        $validator = array();
        if (!$usrnm) {
            $validator['username'] = "You should input your username first" ;
        } else {
            $validator['usernameValue'] = $usrnm;
        }
        if (!$pass) {
            $validator['password'] = "You should input your password first";
        }

        return $this->twig->environment->render('signin.twig', $validator);
    }

    /**
     * @param $firstName
     * @param $surname
     * @param $address
     * @param $city
     * @return string
     */
    public function validationAccount ($firstName, $surname, $address, $city)
    {
        $validator = array();
        if (!$firstName) {
            $validator['firstName'] = 'You must input name first';
        } else {
            $validator['firstNameValue'] = $firstName;
        }
        if (!$surname) {
            $validator['surname'] = 'You must input surname first';
        } else {
            $validator['surnameValue'] = $surname;
        }
        if (!$city) {
            $validator['city'] = 'You must input city first';
        } else {
            $validator['cityValue'] = $city;
        }
        if ($address) {
            $validator['addressValue'] = $address;
        }

        return $this->twig->environment->render('account.twig', $validator);
    }

    /**
     * @return array
     */
    public function validationUploadedFile()
    {
        $targetDir = 'uploads/';
        $uploadFile = $targetDir . basename($_FILES['uploadedFile']['name']);
        $fileExtension = pathinfo($uploadFile, PATHINFO_EXTENSION);
        var_dump($fileExtension);
        var_dump($_FILES['uploadedFile']['tmp_name']);
        $uploadOK = true;
        //check if file has been uploaded
        if (empty($_FILES['uploadedFile']['size'])) {
            echo $this->twig->environment->render('account.twig', array('uploadedFile' => "Sorry, but your file has not been uploaded"));
            $uploadOK = false;
        }
        //check if file is already exists
        if (file_exists($uploadFile)) {
            echo $this->twig->environment->render('account.twig', array('uploadedFile' => "Sorry, but file is already exists"));
            $uploadOK = false;
        }
        //check whether the file is not larger than 900000
        if ($_FILES['uploadedFile']['size'] > 900000) {
            echo $this->twig->environment->render('account.twig', array('uploadedFile' => "Sorry, but file is larger than 900000"));
            $uploadOK = false;
        }
        // Allow certain file formats
        if($fileExtension != "jpg" && $fileExtension != "png" && $fileExtension != "jpeg"
            && $fileExtension != "gif" ) {
            echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
            $uploadOK = false;
        }

        return [
            'uploadOK' => $uploadOK,
            'uploadFile' => $uploadFile
        ];
    }

}