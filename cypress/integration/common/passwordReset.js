import TempEmail from "../page-objects/pages/TempMailPage";
import { defineStep } from "cypress-cucumber-preprocessor/steps";



defineStep("the user navigates to the temporary email application", () => {

    TempEmail.visitTempEmail();
   // TempEmail.agreeTerms()
    //TempEmail.selectMail()
    TempEmail.enterCreds()
    TempEmail.clickMail()
    TempEmail.selectEmail()
    TempEmail.seelectForgotLink()
  
  });


  defineStep("the user navigates to the forget link page", () => {

    TempEmail.navForget();
  
  
  });


  

