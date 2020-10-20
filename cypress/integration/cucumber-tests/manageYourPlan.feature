@Sanity
Feature: Manage Your Plan Account
This feature allows the user to manage their plan (Cancel plan, Upgrade plan, Buy Add-ons)


 Background:
    Given the user navigates to the application

  Scenario: The user navigates to and from each carousel item in thee Home Networking tutorial
    And a new subscription is created for a plan "1month" and period of "Awesome"
     When user enters and submits "Custom" credentials
     And the user clicks on "Manage Your Plan" menu link
     And the user selects the "Set Up" action
     And scroll "next" carousel "2" times
     And scroll "prev" carousel "1" times
    Then Logout of App

    Scenario: The user goes through the entire Home Networking tutorial
    And a new subscription is created for a plan "1month" and period of "Awesome"
     When user enters and submits "Custom" credentials
     And the user clicks on "Manage Your Plan" menu link
     And the user selects the "Set Up" action
     And scroll "next" carousel "3" times
     Then Logout of App


    Scenario: The user goes through the entire Home Networking tutorial
    And a new subscription is created for a plan "1month" and period of "Awesome"
     When user enters and submits "Custom" credentials
     And the user clicks on "Manage Your Plan" menu link
     And the user selects the "Set Up" action
     And the user clicks the "Back" button
     Then Logout of App

      Scenario: The user navigates to the cancel plan page and navigates backwards
    And a new subscription is created for a plan "1month" and period of "Awesome"
     When user enters and submits "Custom" credentials
     And the user clicks on "Manage Your Plan" menu link
     And the user selects the "Cancel my wifinity service" action
     And the user clicks the "Back" button
     Then Logout of App


  
