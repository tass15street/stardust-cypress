import upgradePage from "../page-objects/pages/UpgradePage";
import manageYourPlan from "../page-objects/pages/ManageYourPlan";





defineStep("the user selects the {string} plan for upgrade", plan => {

    upgradePage.upgradePlan(plan)


});


defineStep("the user plan should be {string}", plan => {

    manageYourPlan.checkPlan().should('contain', plan)


});

defineStep("the user selects {string} option from cancel survey", option => {

    manageYourPlan.fillCancelSurvey(option)

});

defineStep("the cancel status is displayed", () => {

    manageYourPlan.checkCancelStatus()

});


defineStep("scroll {string} carousel {string} times", (direction, times) => {

    let count = 1
    while(count <= times){

    if(direction.includes("next")){
      
     manageYourPlan.clickHomeNetNxtBtn()

    }else{

        manageYourPlan.clickHomeNetPrevBtn()

    }

    count++
}
/**/

});



