# Created by mariamelbarbary at 09/12/2022
Feature: Bynder Login page functional tests
  # Enter feature description here

  Scenario: Successful login to Bynder
    Given the login page is displayed
    When enter my email in the username field
    And enter my password in the password field
    And I press login
    Then I should be navigated to the dashboard

  Scenario: unsuccessful login to Bynder (wrong password)
    Given the login page is displayed
    When enter my email in the username field
    And enter wrong password in the password field
    And I press login
    Then I should Not be navigated to the dashboard
    And an error message is displayed "You have entered an incorrect username or password."

  Scenario: unsuccessful login to Bynder (wrong email)
    Given the login page is displayed
    When enter my email in the username field
    And enter wrong password in the password field
    And I press login
    Then I should Not be navigated to the dashboard
    And an error message is displayed "You have entered an incorrect username or password."

  Scenario: unsuccessful login to Bynder (empty password)
    Given the login page is displayed
    When enter my email in the username field
    And empty password in the password field
    And I press login
    Then I should Not be navigated to the dashboard
    And an error message is displayed "Please enter your password."

  Scenario: unsuccessful login to Bynder (empty email)
    Given the login page is displayed
    When enter my email in the username field
    And empty password in the password field
    And I press login
    Then I should Not be navigated to the dashboard
    And an error message is displayed "Please enter your Username."

  Scenario: unsuccessful login to Bynder (empty email & password)
    Given the login page is displayed
    When enter my email in the username field
    And empty password in the password field
    And I press login
    Then I should Not be navigated to the dashboard
    And I should be navigated to the security check form


  Scenario: Lost Password navigation
    Given the login page is displayed
    When I press "Lost Password"
    Then the reset password form is displayed
    And  A field to enter my email is displayed
    And A security check is displayed


  Scenario: User can login with new password
    Given I went through the Lost password flow
    When enter my email in the username field
    And enter my new password in the password field
    Then I should be navigated to the dashboard


  Scenario: User can not login with the old password
    Given I went through the Lost password flow
    When enter my email in the username field
    And enter my OLD password in the password field
    Then I should Not be navigated to the dashboard
    And an error message is displayed "You have entered an incorrect username or password."


  Scenario: Logout from the application
    Given The user is logged in
    And the dashboard is displayed
    When I press on the user profile
    And  Press "logout"
    Then the user is logged out
    And  I should be navigated to the login page

Scenario:  Verify the login page by pressing ‘Back button’ of the browser.
It should not allow you to enter into the system once you log out.


