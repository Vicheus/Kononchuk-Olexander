<?php

namespace IbwJobeetBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('IbwJobeetBundle:Default:index.html.twig');
    }
}
