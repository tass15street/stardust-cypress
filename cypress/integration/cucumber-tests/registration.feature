@Sanity
Feature: Registration of a user account

  As a user
  I want to register signup for an account
 
 
 Background:
    Given the user navigates to the application
    

    Scenario: Account Registration
    When the user selects the "Monthly" period and "Awesome" plan 
    And the user enters "createAccount" registration details
    And the user accepts "terms"
    And the user clicks the "Credit/Debit Card" action
    And user enters "happy" payment details
    And the user finalises their signup
    And the user is navigated to the dashboard

    Scenario: Account Registration With Voucher
    And the user clicks the "I have a voucher code/guest pass" action
    When the user enters and submits voucher "uni_100"
    And the user clicks the "Check Voucher" action
    And the user clicks the "Continue" action
    And the user selects the "Monthly" period and "Awesome" plan 
    And the user enters "createAccount" registration details
    And the user accepts "terms"
    And the user clicks the "Continue" action
    And the user clicks the "Go Online" action

