
import BasePage from "../BasePage";

const crtPlanTtitle = ".body-title";
const cancelPlanSurvey = '#app > div > div.top-elements > div.view-container > div > div.fluidMedia > iframe'
const surveyOptions = '.choice-wrapper button'
const surveysbmBtn = '.navigation-wrapper button'
const acntStatusTitle = 'Your plan is Cancelled'

const homeNetNxtBtn = '.swiper-button-next'
const homeNetPrevBtn = '.swiper-button-prev'

const cancelPlanTitle = '.warning-block p'

//cancel form elements
const cancelPlanReasonElements = '.presenter-multiple-choice-choice'


export default class ManageYourPlan extends BasePage {


    static selectReasonForCancel(i){

        cy.get(cancelPlanReasonElements).eq(i).click();
    }

    static checkPlan(){
     return  cy.get(crtPlanTtitle, {timeout:30 * 1000})
    }

    static fillCancelSurvey(opt){
        
        cy.get(cancelPlanSurvey)
        .iframe().then($element => {

            if(opt == null){
                
                cy.wrap($element).find(surveyOptions).eq(1).click()

            }else{

                cy.wrap($element).find(surveyOptions).eq(opt).click()
            }
            
            cy.wrap($element).find(surveysbmBtn).click()

      })

    }
 

    static checkCancelStatus(){
        cy.get(cancelPlanTitle).should('contain', acntStatusTitle)

    }


    
    static clickHomeNetNxtBtn(){
       
        cy.get(homeNetNxtBtn).click()
        

    }
    
    static clickHomeNetPrevBtn(){
        cy.get(homeNetPrevBtn).click()

    }



}