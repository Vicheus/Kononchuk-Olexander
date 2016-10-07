<?php
/**
 * Created by PhpStorm.
 * User: shura
 * Date: 20.09.16
 * Time: 17:30
 */
namespace Templates;

use Twig_Environment;
use Twig_Loader_Filesystem;

require_once '/home/shura/projects/test/coursera-test/Twig/lib/Twig/Autoloader.php';

class Templates
{
    /**
     * @var Twig_Loader_Filesystem
     */
    public $loader;

    /**
     * @var Twig_Environment
     */
    public $environment;


    public function __construct()
    {
        \Twig_Autoloader::register();

        $this->loader = new \Twig_Loader_Filesystem('/home/shura/projects/test/coursera-test/MySite/Templates/');
        $this->environment = new \Twig_Environment($this->loader, array('cache' => false,
            'debug' => true,
            'auto_reload' => true));
    }
}


