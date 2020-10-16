
import BasePage from "../BasePage";

const crtPlanTtitle = ".body-title";


export default class ManageYourPlan extends BasePage {


    static checkPlan(){
     return  cy.get(crtPlanTtitle, {timeout:30 * 1000})
    }



}