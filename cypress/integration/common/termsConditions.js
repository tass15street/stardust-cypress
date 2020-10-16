import confirmPlan from "../page-objects/pages/ConfirmPlanPage";



defineStep("the user clicks the terms and conditions", () => {
    
    confirmPlan.clickTerms();
    cy.get(".v-dialog--active").scrollTo('bottom') 

  });