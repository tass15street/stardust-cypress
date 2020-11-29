import { defineStep, When } from "cypress-cucumber-preprocessor/steps";
import DashboardPage from "../page-objects/pages/DashboardPage";
import StardustHome from "../page-objects/pages/HomePage";
import registerAcnt from "../page-objects/pages/RegisterAccountPage";
import confirmPlan from "../page-objects/pages/ConfirmPlanPage";
import loginPage from "../page-objects/pages/loginPage";
import myAccount from "../page-objects/pages/MyAccountPage";
import accountEdit from "../page-objects/pages/MyAccountEditPage";
import paymentMethod from "../page-objects/pages/PaymentMethod";
import FinishSignup from "../page-objects/pages/FinishSignupPage";
import GuestPass from "../page-objects/pages/GuestPassPage";
import GuestPassRedemption from "../page-objects/pages/GuestPassRedemptionPage";



defineStep("the user enters {string} registration details", (detailsType) => {

  registerAcnt.fill_PersonalDetails(detailsType);


});

defineStep("the user accepts {string}", (cnd) => {
  
  confirmPlan.acceptConditions(cnd);

});

defineStep("confirms their acceptance of the selected plan", (cnd) => {

  confirmPlan.selectBtn("Credit/Debit Card", { timeout: 30 * 1000 });

});

//Home Page Enter Voucher Code
defineStep("the user enters and submits voucher {string}", (voucher) => {

  StardustHome.enterVoucher(voucher);

});



defineStep("the user clicks on {string} menu link", menuElement => {

  DashboardPage.getMainMenuItems(menuElement).click();

});




defineStep("the user selects the {string} action", action => {

  myAccount.getAction(action);

});

defineStep("the user selects the modal {string} action", (action) => {

  myAccount.selectAction(action);
});


defineStep("the user logs out of the portal", (action) => {

  myAccount.logOut();
  
});

defineStep("the {string} modal popup should be displayed", ( msgExpect) => {

   cy.fixture("mdlMsgs").then(data => { 
   
    loginPage.pause(2000)
    switch (msgExpect) {
      
      case "username":
        loginPage.showErrorMessage().invoke('text').then(($txt) => {

          expect($txt).to.contain(data.lgn_error)
        });
        break;

        case "macDuplicate":
          loginPage.getModalTxt().invoke('text').then(($txt) => {

            expect($txt).to.contain(data.ma_duplicateMac)
          });
        break;

        case "ma_deviceLimit":
          loginPage.getModalTxt().invoke('text').then(($txt) => {

            expect($txt).to.contain(data.ma_deviceLimit)
          });
        break;
    }
  });
});


defineStep("the user finalises their signup", () => {

  FinishSignup.pause(9000);
  FinishSignup.goOnline();
  

});

defineStep("the user is navigated to the dashboard", ( msgExpect) => {

  FinishSignup.pause(9000);
  //FinishSignup.goOnline();
  
});


//Obtain guest pass from guest pass page
defineStep("the user gets a valid guest pass", ( ) => {

  GuestPass.getGuessPass()
  cy.get("@passCode").then((code) => {

    cy.log(code)

});
  
});

defineStep("the user enters {string} redemption details", (data) => {

  GuestPassRedemption.fill_GuestRedemption(data)
  
});

defineStep("the user clicks the {string} action", action => {

  myAccount.pauseAction(action)
  myAccount.selectBtn(action);

});


defineStep("the user clicks the {string} button", action => {

  if(action == "Back"){

    myAccount.clickBackButton()


  } else {

    myAccount.clickBtn(action);

  }
  

});



defineStep("the {string} modal popup message with {string} text should be displayed matching {string}", (index, mdl, msgExpect) => {

  myAccount.pause(2000);
  cy.fixture("mdlMsgs").then(data => {

    myAccount.getMdalText(index, mdl);
    cy.get("@mdlText").then((mdlText) => {

      switch (msgExpect) {
        case "ma_stillActive":
          expect(data.ma_stillActive).to.eq(mdlText);
          break;

        case "ma_DeletePayment":
          expect(data.ma_DeletePayment).to.eq(mdlText);
          break;

        case "ma_duplicateEmail_Main_Msg":
          expect(data.ma_duplicateEmail_Main_Msg).to.eq(mdlText);
          break;

        case "ma_duplicateEmail_Sub_Msg":
          expect(data.ma_duplicateEmail_Sub_Msg).to.eq(mdlText);
          break;

        case "ma_incorrectPassword":
          expect(data.ma_incorrectPassword).to.eq(mdlText);
          break;

      }

    });

  });

});


defineStep("the user opens the login page", () => {

  loginPage.visit()

});


defineStep("user enters {string} details for their account", details => {

  accountEdit.fill_EditDetails(details);


});

defineStep("user enters {string} payment details", details => {

  paymentMethod.fill_Payment(details);


});


defineStep("user enters {string} details for their password", details => {

  accountEdit.fill_Password(details);

});


defineStep("user restores the old password", details => {

  accountEdit.restorePassword();

});



