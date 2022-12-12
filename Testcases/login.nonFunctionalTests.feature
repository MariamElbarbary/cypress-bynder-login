# Created by mariamelbarbary at 09/12/2022
Feature: Bynder Login page non-functional tests
  Non functional tests like security tests and performance tests

  Scenario: if Bynder supports accessibility then verify that the fields are properly set.

  Scenario: Verify if a user should be able to login with the same credentials in different browsers at the same time.
  Scenario: Verify if a user should not be allowed to log in with different credentials from the same browser at the same time.


#Performance
  Scenario: Verify the time needed to execute a successful login and loading the dashboard
  Scenario: Verify the time needed to execute a successful logout and login page is displayed
  Scenario: Verify the timeout functionality of the login session.

# Security testing
  Scenario: Verify that there is a limit on the total number of unsuccessful login attempts.
  Scenario: Verify the Login page against SQL injection attack.
  Scenario: Verify that XSS vulnerability should not work on the login page.