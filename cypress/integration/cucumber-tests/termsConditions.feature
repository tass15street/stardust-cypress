@TermsAndConditions @Sanity
Feature: Terms and Conditions
  This feature allows the user to enter valid and invalid user credentials

   Background:
    Given the user navigates to the application
    
    Scenario: The Terms And Connditions is Displayed to the user From Signup
    When the user selects the "Monthly" period and "Awesome" plan 
    And the user enters "createAccount" registration details
    And the user clicks the terms and conditions

    Scenario: The Terms And Connditions is Displayed to the user From guest pass
    When the user clicks the "I have a voucher code/guest pass" action
    And the user clicks the "Go activate Guest Pass" action
    And the user clicks the terms and conditions 