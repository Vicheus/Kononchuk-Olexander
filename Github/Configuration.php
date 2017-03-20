<?php
/**
 * Created by PhpStorm.
 * User: shura
 * Date: 19.10.16
 * Time: 17:13
 */
namespace Configuration;

use Facebook\WebDriver\Remote\RemoteWebDriver;
use Facebook\WebDriver\Remote\WebDriverCapabilityType;

/**
 * Class Configuration
 * @package Configuration
 */
class Configuration extends \PHPUnit_Extensions_Selenium2TestCase
{
    public static $HOST = 'http://localhost:4444/wd/hub';
    public static $CHROME_BROWSER = 'chrome';

    /**
     * @var RemoteWebDriver
     */
    public $driver;

    /**
     * Function to set up basic parameters of the session
     */
    public function setUp()
    {

        $this->setBrowserUrl('http://github.com');
        $this->setBrowser(self::$CHROME_BROWSER);
    }

    /**
     * Create a connection to remote web driver
     */
    public function createConnection()
    {
        $this->driver = RemoteWebDriver::create(self::$HOST, array(WebDriverCapabilityType::BROWSER_NAME => self::$CHROME_BROWSER));
    }

    /**
     * Close browser, end session
     */
    public function tearDown()
    {
        $this->driver->quit();
    }
}