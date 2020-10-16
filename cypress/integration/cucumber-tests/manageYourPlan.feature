@Sanity
Feature: Manage Your Plan Account
This feature allows the user to manage their plan (Cancel plan, Upgrade plan, Buy Add-ons)


 Background:
    Given the user navigates to the application

  Scenario: The user navigates to the cancel plan page and navigates backwards
    And a new subscription is created for a plan "1month" and period of "Awesome"
     When user enters and submits "Custom" credentials
     And the user clicks on "Manage Your Plan" menu link
     And the user selects the "Cancel my wifinity service" action
  
     
 



