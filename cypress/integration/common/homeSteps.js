import StardustHome from "../page-objects/pages/HomePage";


defineStep("the user navigates to the application", () => {

    StardustHome.visit();
  
   
    
});



defineStep("the user selects the {string} period and {string} plan", (period, plan) => {

    StardustHome.choosePlan(period, plan)
   // if(expect(apiRequest.setEmail()).to.contain('@')){
     // cy.log("better");
  
    //}
  
  
  });