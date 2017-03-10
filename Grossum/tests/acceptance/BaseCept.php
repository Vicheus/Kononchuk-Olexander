<?php

// @group mandatory

$I = new AcceptanceTester($scenario);

$I->wantTo('ensure that home page works');
$I->amOnPage('/admin/login');
$I->makeScreenshot('success-home');
//
//$I->seeElement('//h1[text()=\'Exampl Domain\']');
//$I->makeScreenshot('success-home');
