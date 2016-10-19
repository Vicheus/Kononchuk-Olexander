<?php
namespace MainPage;

class MainPage extends LoginPage
{
	// constants
	public static $NEW_REPOSITORY_FORM_URL = "github.com/new";
	public static $NEW_REPOSITORY_URL = "/Test-repository";

	// page elements
	public static $ADD_NEW_REPOSITORY_LINK = "//div/a[contains(text(), 'New repository')]";
	public static $NEW_REPOSITORY_NAME_FIELD = "//input[@id='repository_name']";
	public static $NEW_REPOSITORY_DESCRIPTION_FIELD = "//input[@id='repository_description']";
	public static $INITIALIZE_REPOSITORY_CHECKBOX = "//input[@id='repository_auto_init']";
	public static $CREATE_NEW_REPOSITORY_BUTTON = "//button[@class='btn btn-primary first-in-line']";
	public static $NEW_REPOSITORY_NAME_ELEMENT = "//a[contains(text(), 'Test-repository')]"

	// test data
	public static $NEW_REPOSITORY_NAME_VALUE = "Test repository";
	public static $NEW_REPOSITORY_DESCRIPTION_VALUE = "Test description";

	protected function createNewRepository (\Functional Tester $I) 
	{
		$I->amGoingTo('Test availability to create new repository');
		$I->amOnPage(LoginPage::$MAIN_PAGE_URL);
		$I->waitForElementVisible(self::$ADD_NEW_REPOSITORY_LINK);
		$I->click(self::$ADD_NEW_REPOSITORY_LINK);
		$I->seeCurrentUrlMatches(self::$NEW_REPOSITORY_FORM_URL);
		$I->waitForElement(self::$NEW_REPOSITORY_NAME_FIELD);
		$I->fillField(self::$NEW_REPOSITORY_NAME_FIELD, self::$NEW_REPOSITORY_NAME_VALUE);
		$I->fillField(self::$NEW_REPOSITORY_DESCRIPTION_FIELD, self::$NEW_REPOSITORY_DESCRIPTION_VALUE);
		$I->checkOption(self::$INITIALIZE_REPOSITORY_CHECKBOX);
		$I->click(self::$CREATE_NEW_REPOSITORY_BUTTON);
		$I->waitForElement(self::$NEW_REPOSITORY_NAME_ELEMENT);
		$I->seeElement(self::$NEW_REPOSITORY_NAME_ELEMENT);
		$I->seeInCurrentUrl(self::$NEW_REPOSITORY_URL);
	}

}




?>