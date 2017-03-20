<?php
namespace LogoutPage;

/**
* 
*/
class LogoutPage extends LoginPage
{
	// constants
	public static $LOGOUT_URL = "github.com/logout";

	// page elements
	public static $DROPDOWN_CARET = "//a[@class='header-nav-link name tooltipped tooltipped-sw js-menu-target']/span";
	public static $LOGOUT_LINK = "//button[@class='dropdown-item dropdown-signout']";
	public static $SIGN_UP_BUTTON = "//button[contains(text(), 'Sign up for GitHub')]";
	public static $SIGN_OUT_BUTTON = "//input[@value='Sign out']";

	protected function logOut(\Functional Tester $I, $element) 
	{
		$I->amGoingTo('test availability to log out from github account');
		if ($element === self::$LOGOUT_URL) {
			$I->amOnPage(self::$LOGOUT_URL);
			$I->waitForElement(self::$SIGN_OUT_BUTTON);
			$I->click(self::$SIGN_OUT_BUTTON);
		} elseif ($element === $LOGOUT_LINK) {
			$I->amOnPage(LoginPage::$MAIN_PAGE_URL);
			$I->waitForElement(self::$DROPDOWN_CARET);
			$I->click(self::$DROPDOWN_CARET);
			$I->waitForElement(self::$LOGOUT_LINK);
			$I->click(self::$LOGOUT_LINK);
		} 
		$I->waitForElement(self::$SIGN_UP_BUTTON);
		$I->seeElement(self::$SIGN_UP_BUTTON);
	}
}
?>