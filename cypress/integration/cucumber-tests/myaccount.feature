@Sanity @MyAccount
Feature: My Account
This feature allows the user to manage their account details


 Background:
    Given the user navigates to the application
      

  Scenario: Attempt to remove payment card with an active subscription
    And the user registers plan "Essential" for a "Monthly" period
    When the user clicks on "My Account" menu link
    And the user selects the "Remove" action
    And the user selects the "Yes" action
    Then the "1" modal popup message with "active" text should be displayed matching "ma_stillActive"


Scenario: Attempt to update user email with an already existing email
    And a new subscription is created for a plan "1month" and period of "Awesome"
    When user enters and submits "Custom" credentials
    And the user clicks on "My Account" menu link
    And the user selects the "Edit" action
    When user enters "duplicateEmail" details for their account
    And the user selects the "Update information" action
    Then the "0" modal popup message with "already registered" text should be displayed matching "ma_duplicateEmail_Sub_Msg"


  Scenario: The user cannot update account details with missing field values
    And a new subscription is created for a plan "1month" and period of "Supersonic"
    When user enters and submits "Custom" credentials
    And the user clicks on "My Account" menu link
    And the user selects the "Edit" action
    When user enters "required" details for their account


  Scenario: Attempt to update user email with an invalid email
    And a new subscription is created for a plan "1month" and period of "Essential"
    When user enters and submits "Custom" credentials
    And the user clicks on "My Account" menu link
    And the user selects the "Edit" action
    When user enters "invalidEmail" details for their account


  Scenario: Attempt to update user mobile field with an invalid mobile
    And a new subscription is created for a plan "1month" and period of "Essential"
   When user enters and submits "Custom" credentials
    And the user clicks on "My Account" menu link
    And the user selects the "Edit" action
    When user enters "invalidPhone" details for their account


  Scenario: Attempt to update user password with an invalid current password
    And a new subscription is created for a plan "1month" and period of "Essential"
    When user enters and submits "Custom" credentials
    And the user clicks on "My Account" menu link
    And the user selects the "Edit" action
    When user enters "invalidCurrentPassword" details for their password
    And the user selects the "Update password" action
    Then the "0" modal popup message with "Incorrect" text should be displayed matching "ma_incorrectPassword"
    And the user selects the "Close" action


  Scenario: Attempt to update user password with an non matching new passwords
    And a new subscription is created for a plan "1month" and period of "Essential"
    When user enters and submits "Custom" credentials
    And the user clicks on "My Account" menu link
    And the user selects the "Edit" action
    When user enters "nonMatchingPasswords" details for their password



  Scenario: Attempt to update the user password with a valid password
    And a new subscription is created for a plan "1month" and period of "Essential"
    When user enters and submits "Custom" credentials
    And the user clicks on "My Account" menu link
    And the user selects the "Edit" action
    When user enters "newPassword" details for their password
    And the user selects the "Update password" action
    Then the "0" modal popup message with "Password changed" text should be displayed matching "ma_passwordChange"
    And the user selects the "Close" action
    And user restores the old password
    And the user selects the "Update password" action