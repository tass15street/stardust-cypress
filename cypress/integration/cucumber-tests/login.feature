@login @Sanity
Feature: Login
  This feature allows the user to enter valid and invalid user credentials

   Background:
    Given the user navigates to the application
    


    Scenario: Valid login
    And a new subscription is created for a plan "1month" and period of "Essential"
    When user enters and submits "Custom" credentials
    Then the dashboard page is displayed showing the login text
    Then Logout of App

  