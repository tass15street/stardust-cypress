@DeviceManagement @Sanity
Feature:  Device Management
  This feature allows the user to add, edit and delete devices to their account

  Background:
    Given the user navigates to the application


  Scenario: The user removes a device
    When a new subscription is created for a plan "1month" and period of "Essential"
    And user enters and submits "Custom" credentials
    And the user clicks on "Device Management" menu link
    And the user selects the "Remove" action
    And the user selects the modal "Remove" action

  Scenario: The user attempts to add an already added mac address
    When a new subscription is created for a plan "1month" and period of "Essential"
    And user enters and submits "Custom" credentials
    And the user clicks on "Device Management" menu link
    And the user gets the existing device connection
    And the user selects the "Add a device" action
    And the user selects the "Next" action
    And the user selects the "Next" action
    And the user enters "duplicateDevice" into the mac address field
    And the user selects the "Add device" action
    And the "macDuplicate" modal popup should be displayed

  Scenario: The user uses up their change device limit
    When a new subscription is created for a plan "1month" and period of "Supersonic"
    And user enters and submits "Custom" credentials
    And the user clicks on "Device Management" menu link
    And the user exceeds their device change limit for "Supersonic" plan
    And the "ma_deviceLimit" modal popup should be displayed

  Scenario: The user edits a device name
    When a new subscription is created for a plan "1month" and period of "Supersonic"
    And user enters and submits "Custom" credentials
    And the user clicks on "Device Management" menu link
    And the user selects the "Edit" action
    And the user changes the name of the device to "noname"
