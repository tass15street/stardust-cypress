import upgradePage from "../page-objects/pages/UpgradePage";
import manageYourPlan from "../page-objects/pages/ManageYourPlan";





defineStep("the user selects the {string} plan for upgrade", plan => {

    upgradePage.upgradePlan(plan)


});


defineStep("the user plan should be {string}", plan => {

    manageYourPlan.checkPlan().should('contain', plan)


});