import { stardust_homepage_url } from "../../../config";
import ApiRequests from './pages/ApiRequests'

const mldAction = ".actions ._button"
const controls = "._button";
const portalBtn = '.button'
const backButton = '.backButton'
const mdl = ".modal-body";
const mdlMessage = " .message";
const mdlBody = ".body-section";
const modalmsg = "mdlText";
const btn = ".v-btn";
const mdlMsg = '.error'
const logout = '.logout-button'
const regFields = '.v-text-field__slot input' 

const terms = '.v-input--selection-controls__input input'
const termsLink = '.v-input__slot a'
const ripple = '.v-input--selection-controls__ripple'


export default class BasePage extends ApiRequests  {


  static visit() {
    cy.visit(stardust_homepage_url, { timeout: 10 * 1000 });
  }


  static getAction(item) {
    cy.get(controls, { timeout: 30 * 1000  }).contains(item).click();
 }

 static selectAction(item) {
  cy.get(mldAction, { timeout: 30 * 1000  }).contains(item).click();
}

  static getControls(item) {
     cy.get(btn).contains(item).click();
  }

 

  static getActionDisabled(item) {
   
    return cy.get(controls, { timeout: 30 * 1000  }).should('be.disabled')
 }
  static getControlDisabled() {
    return cy.get(btn, { timeout: 30 * 1000  }).should('be.disabled')
  }

  static getNamedControlDisabled(item) {
    return cy.get(controls, { timeout: 30 * 1000  }).contains(item).should('be.disabled')
  }

  static getLogOut(){
   
   return cy.$(logout)
  }

  static logOut(){
    cy.get(logout, { timeout: 30 * 1000  }).click()
  }

  static getMdlMsges(msg){
    cy.fixture("mdlMsgs").then(data => {

      switch (msg) {
        case "ma_stillActive":
          cy.wrap(mdlText).as(ma_stillActive);
          break;

        case "ma_DeletePayment":
          cy.wrap(mdlText).as(ma_DeletePayment);
          break;

        case "ma_duplicateEmail_Main_Msg":
          cy.wrap(mdlText).as(ma_duplicateEmail_Main_Msg);
          break;

        case "ma_duplicateEmail_Sub_Msg":
          cy.wrap(mdlText).as(ma_duplicateEmail_Sub_Msg);
          break;

      }
    })
  }


  static getMdalText(index, txt) {

    cy.get(mdl).then((mdlPop) => {
      if (mdlPop.find(mdlMessage).length) {

        cy.get(mdlMessage).eq(index).contains(txt);
        cy.get(mdlMessage).eq(index).invoke("text").then((mdlText) => {

          cy.wrap(mdlText).as(modalmsg);

        });


      } else if (mdlPop.find(mdlBody).length) {

        cy.get(mdlBody).eq(index).contains(txt);
        cy.get(mdlBody).eq(index).invoke("text").then((mdlText) => {
          cy.wrap(mdlText).as(modalmsg);
        });

      }

    });

  }


  static pause(ms) {

    cy.wait(ms);
  }

  static logInfo(message) {

    cy.log(message);
  }

  static setMobileViewport() {

    cy.viewport("iphone-x");
  }

  static setTabletViewport() {

    cy.viewport("ipad-2");
  }


  static setDesktopViewport() {

    cy.viewport("macbook-13");
  }


  static setLargeDesktopViewport() {

    cy.viewport("1980, 1080");
  }


  static getField(field) {
    return cy.get(field, { timeout: 30 * 1000  });

  }

  static selectBtn(pgBtn) {
     cy.get(btn, { timeout: 30 * 1000  }).contains(pgBtn).click();

  }

  static clickBtn(pgBtn) {
     cy.get(portalBtn, { timeout: 30 * 1000  }).contains(pgBtn).click();

  }


  static upgradePlan(plan) {
    cy.get(".columns.medium-4", { timeout: 30 * 1000  }).then($upgPlan => {


      let me = cy.wrap($upgPlan).contains(plan).length 

      cy.wrap($upgPlan).contains(plan)
      .parentsUntil('.columns.medium-4')
    .find(portalBtn).click();

    })

 }


  static clickBackButton(){
    cy.get(backButton, { timeout: 30 * 1000  }).click();
  }

  static showErrorMessage() {
    return cy.get(mdlMsg, { timeout: 30 * 1000  })
  }


static getRegField(index){
  return cy.get(regFields, { timeout: 30 * 1000  }).eq(index)
}

  static populateFormSignup(data){
    this.pause(2000)
    this.getRegField(0).type(data.es_user_name);
    this.getRegField(1).type(data.es_user_name);
    cy.get("@planType").then((plnTpe) => {

     this.setEmail(plnTpe)
     cy.get("@regSetEmail").then((email) =>{
      this.getRegField(2).type(email);
     });
      
    });
    
    this.getRegField(3).type(data.normalPhone);
    this.getRegField(4).type(data.password);

  }

// select terms
static selectTerms(indx){
  cy.get(terms, { timeout: 30 * 1000 }).eq(indx).click()
}

static clickTerms(){
  cy.get(termsLink, { timeout: 30 * 1000 }).eq(0).click()
  
}



static changeBlocker(){
  cy.get(ripple)
  .invoke('attr', 'style', 'display: none! important')

}

static pauseAction(act){
  if(act == "Cancel Active Guest Pass"){
    
    this.pause(9000)
  } else if(act == "Continue"){
    
    this.pause(5000)
  } else if(act == "Go Online"){
    
    this.pause(5000)
  }
  
}
  


}