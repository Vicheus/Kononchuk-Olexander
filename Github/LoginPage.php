<?php
namespace LoginPage;

abstract class LoginPage
{
	// constants
	public static $LOGIN_URL = "github.com/login";
	public static $MAIN_PAGE_URL = "github.com";

	// page elements
	public static $USERNAME_FIELD = "//input[@id='login_field']";
	public static $PASSWORD_FIELD = "//input[@id='password']";
	public static $SIGN_IN_BUTTON = "//input[@value='Sign in']";
	public static $GITHUB_LOGO = "//a[@class='header-logo-invertocat']";
	public static $ERROR_ELEMENT = "//div[@class='flash flash-full flash-error']";

	// test data
	public static $CORRECT_USERNAME_VALUE = "test";
	public static $CORRECT_PASSWORD_VALUE = "test";
	public static $INCORRECT_USERNAME_VALUE = "bad_test";
	public static $INCORRECT_PASSWORD_VALUE = "bad_test";

	/**
	*@param $username string
	*@param $password string
	*@param $element string
	*@param $url string
	*/
	protected function logIn (\Functional Tester $I, $username, $password, $element, $url) 
	{
		$I->amGoingTo('Test availability to log in to github account');
		$I->amOnPage(self::$LOGIN_URL);
		$I->waitForElementVisible(self::$USERNAME_FIELD);
		$I->fillField(self::$USERNAME_FIELD, $username);
		$I->fillField(self::$PASSWORD_FIELD, $password);
		$I->click(self::$SIGN_IN_BUTTON);
		$I->waitForElementVisible($element);
		$I->seeElement($element);
		$I->seeCurrentUrlMatches($url);
	}
}
?>