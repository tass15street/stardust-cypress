@Sanity @ManageYourPlan
Feature: Upgrade User Account
This feature allows the user to manage their plan (Cancel plan, Upgrade plan, Buy Add-ons)


 Background:
    Given the user navigates to the application


 Scenario: The user upgrade their essential account to awesome
    And a new subscription is created for a plan "1month" and period of "Essential"
     When user enters and submits "Custom" credentials
     And the user clicks on "Manage Your Plan" menu link
     And the user clicks the "Upgrade Plan" button
     And the user selects the "Awesome" plan for upgrade
     And the user selects the "Back to plans" action
     And the user plan should be "Awesome"


    Scenario: The user upgrades their essential account to supersonic
    And a new subscription is created for a plan "1month" and period of "Essential"
     When user enters and submits "Custom" credentials
     And the user clicks on "Manage Your Plan" menu link
     And the user clicks the "Upgrade Plan" button
     And the user selects the "Supersonic" plan for upgrade
     And the user selects the "Back to plans" action
     And the user plan should be "Supersonic"
     

   Scenario: The user upgrades their awesome account to supersonic
    And a new subscription is created for a plan "1month" and period of "Awesome"
     When user enters and submits "Custom" credentials
     And the user clicks on "Manage Your Plan" menu link
     And the user clicks the "Upgrade Plan" button
     And the user selects the "Supersonic" plan for upgrade
     And the user selects the "Back to plans" action
     And the user plan should be "Supersonic"
 



