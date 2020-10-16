import StardustHome from "../page-objects/pages/HomePage";
import apiRequest from "../page-objects/pages/ApiRequests";


defineStep("a new subscription is created for a plan {string} and period of {string}", (period, plan) => {

    apiRequest.getPeriodAndPlan(period, plan)
  
  });


  defineStep("the user creates network request {string} of {string}", (period, plan) => {

    apiRequest.getPeriodAndPlan(period, plan)
    if(expect(apiRequest.setEmail()).to.contain('@')){
      cy.log("better");
  
    }
    cy.log(apiRequest.setEmail());
    apiRequest.getPlansForSite();
  
  });