import { defineStep, When } from "cypress-cucumber-preprocessor/steps";
import deviceManagement from "../page-objects/pages/DeviceManagementPage";




defineStep("the user gets the existing device connection", () => {

  deviceManagement.getDeviceConnection()
});



defineStep("the user enters {string} into the mac address field", (details) => {

  deviceManagement.fill_device(details)
});

defineStep("the user exceeds their device change limit for {string} plan", (plan) => {

  let limit = 0
  switch (plan) {

    case "Essential":
      limit = 1
      cy.log("ess" + limit)
      break

    case "Awesome":
      limit = 2
      cy.log("awe" + limit)
      break

    case "Supersonic":
      limit = 4
      cy.log("sup" + limit)
      break

  }

  for (let i = 1; i <= limit; i++) {

    deviceManagement.addDevice()

  }
 
    deviceManagement.exceedDeviceChange()
    deviceManagement.invokeTooltip()
    deviceManagement.addDevice()
   /*  */

});


defineStep("the user changes the name of the device to {string}", (plan) => {

  deviceManagement.changeDeviceName(plan)

})



