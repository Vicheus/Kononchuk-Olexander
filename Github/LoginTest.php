<?php
namespace LoginTest;

require_once 'LoginPage.php';

use LoginPage\LoginPage;

class LoginTest extends LoginPage
{
    /**
     * @test Login on GitHub resource
     */
    public function loginWithCorrectData()
    {
        $this->setUp();
        $this->createConnection();
        $this->driver->get(self::$LOGIN_URL);
        $this->assertContains(self::$GITHUB_TITLE, $this->driver->getTitle());
        $this->submitLoginForm();
        $this->assertContains($this->getButtonText(), 'Start a project');
        $this->tearDown();
    }
}
?>