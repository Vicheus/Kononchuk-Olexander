<?php
namespace LogoutCest;

class LogoutCest extends LogoutPage
{
	public function logOutViaUrl(\Functional Tester) 
	{
		$I->expect('successfull logout');
		$this->logOut($I, LogoutPage::$LOGOUT_URL);
	}

	public function logOutViaMenu(\Functional Tester) 
	{
		$I->expect('successfull logout');
		$this->logOut($I, LogoutPage::$LOGOUT_LINK);
	}
}
?>