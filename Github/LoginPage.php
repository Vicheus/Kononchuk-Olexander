<?php
namespace LoginPage;

require_once 'Configuration.php';
require_once 'MainPage.php';

use Configuration\Configuration;
use Facebook\WebDriver\WebDriverBy;
use Facebook\WebDriver\WebDriverElement;
use MainPage\MainPage;


/**
 * Class LoginPage
 * @package LoginPage
 */
class LoginPage extends Configuration
{
    // constants
	public static $LOGIN_URL = "https://github.com/login";

	// page elements
    public static $GITHUB_TITLE = "GitHub";
	public static $USERNAME_FIELD = "//input[@id='login_field']";
	public static $PASSWORD_FIELD = "//input[@id='password']";
	public static $SIGN_IN_BUTTON = "//input/following-sibling::input[@value='Sign in']";
	public static $ERROR_ELEMENT = "//div[@class='flash flash-full flash-error']";

	// test data
	public static $CORRECT_USERNAME_VALUE = "Vicheus";
	public static $CORRECT_PASSWORD_VALUE = "Vicheus4238366";
	public static $INCORRECT_USERNAME_VALUE = "bad_test";
	public static $INCORRECT_PASSWORD_VALUE = "bad_test";

    /**
     * @param $selector
     * @param $selectorType
     * @return WebDriverElement
     */
    public function myWaitForElement($selector, $selectorType) {
        $element = $this->waitUntil(function() use ($selector, $selectorType){
            if ($selectorType === 'xPath') {
                $element = $this->driver->findElement(WebDriverBy::xpath($selector));
                return $element;
            } elseif ($selectorType === 'css') {
                $element = $this->driver->findElement(WebDriverBy::cssSelector($selector));
                return $element;
            } else {
                $element = null;
                return $element;
            }
        }, 8000);
        return $element;
    }

    /**
     * Function that find field via selector and fill it with value data
     * @param string $selector xPath
     * @param string $value
     */
    public function fillField($selector, $value)
    {
        $field = $this->driver->findElement(WebDriverBy::xpath($selector));
        $field->sendKeys($value);
    }

    /**
     *
     */
    public function submitLoginForm()
    {
        $this->fillField(self::$USERNAME_FIELD, self::$CORRECT_USERNAME_VALUE);
        $this->fillField(self::$PASSWORD_FIELD, self::$CORRECT_PASSWORD_VALUE);
        $this->myWaitForElement(self::$SIGN_IN_BUTTON, 'xPath')->click();
        $this->myWaitForElement(MainPage::$GITHUB_LOGO, 'xPath');
    }

    public function getButtonText()
    {
        return $this->driver->findElement(WebDriverBy::xpath(MainPage::$START_PROJECT_BUTTON))->getText();
    }
}
?>