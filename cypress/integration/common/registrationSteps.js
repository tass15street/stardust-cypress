import { defineStep, When } from "cypress-cucumber-preprocessor/steps";
import StardustHome from "../page-objects/pages/HomePage";
import registerAcnt from "../page-objects/pages/RegisterAccountPage";
import confirmPlan from "../page-objects/pages/ConfirmPlanPage";
import myAccount from "../page-objects/pages/MyAccountPage";
import paymentMethod from "../page-objects/pages/PaymentMethod";
import FinishSignup from "../page-objects/pages/FinishSignupPage";



defineStep("the user registers an {string} plan for a {string} period", (plan, period) => {
    

 
    StardustHome.choosePlan(period, plan)
    registerAcnt.fill_PersonalDetails("createAccount");
    confirmPlan.acceptConditions("terms");
    myAccount.pauseAction("Credit/Debit Card")
    myAccount.selectBtn("Credit/Debit Card");
    paymentMethod.fill_Payment("happy");
    FinishSignup.pause(9000);
    FinishSignup.goOnline();
    
  
  });