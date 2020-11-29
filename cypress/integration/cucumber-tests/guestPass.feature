@GuestPass @Sanity
Feature:  Redeeming guest passes 
  This feature allows the user to redeem valid guest pass

   Background:
    Given the user navigates to the application
    

    Scenario: Redeem Guest Pass
    And a new subscription is created for a plan "1month" and period of "Essential"  
    And user enters and submits "Custom" credentials
    And the user clicks on "Device Management" menu link
    And the user selects the "Remove" action
    And the user selects the modal "Remove" action
    And the user clicks on "Guest Passes" menu link
    And the user gets a valid guest pass
    And the user logs out of the portal
    And the user clicks the "I have a voucher code/guest pass" action
    And the user clicks the "Go activate Guest Pass" action
    And the user enters "createRedemption" redemption details
    And the user clicks the "Get me online" action
    And the user clicks the "Cancel Active Guest Pass" action 
    And the user clicks the "Confirm" action
    When user enters and submits "Custom" credentials
    And the user clicks on "Guest Passes" menu link
    Then Logout of App



  