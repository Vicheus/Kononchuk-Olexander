<?php
namespace LoginCest;

class LoginCest extends LoginPage
{
	public function logInWithCorrectCredentials(\Functional Tester) 
	{
		$I->expect('successfull login');
		$this->logIn($I, LoginPage::$CORRECT_USERNAME_VALUE, LoginPage::$CORRECT_PASSWORD_VALUE, LoginPage::$GITHUB_LOGO, LoginPage::$MAIN_PAGE_URL);
	}

	public function logInWithBadCredentials(\Functional Tester) 
	{
		$I->expectTo('see error message Incorrect username or password');
		$this->logIn($I, LoginPage::$INCORRECT_USERNAME_VALUE, LoginPage::$INCORRECT_PASSWORD_VALUE, LoginPage::$ERROR_ELEMENT, LoginPage::$LOGIN_URL);
	}
}
?>