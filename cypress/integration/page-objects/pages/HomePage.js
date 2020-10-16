
import BasePage from "../BasePage";


const stardustLoginButton = '.button.highlight.small'
const heading = '.primary-header.alternate-light'
const loginBtn = '.topBar__login .v-btn'
const loginBtnTxt = 'Log In'

//select a plan
const first_btn = '.row.align-center > div:nth-child(1) button'
const second_btn = '.row.align-center > div:nth-child(3) button'
const third_btn = '.row.align-center > div:nth-child(5) button'
const planPeriod_btns = '.billingCyclePicker__picker > button'
const plan_btn = '.planCard .planCardHeader__button'

//voucher/guestpass
const vouchGuest = '.v-btn__content'
const app = '#app'



export default class StardustHomePage extends BasePage {
  
  static getLogin() {
    return cy.get(app)

  }



  static getHomePageHeading() {
    return cy.get(heading);

  }

  static visitStarship(){
    cy.visit(stardust_login_url)
  }


  static selectLogin(){
    cy.contains(loginBtnTxt, {timeout: 30 * 1000}).click()

   // cy.get(loginBtn).click()

  }


  static submitLogin(){

    cy.get(stardustLoginButton).eq(0).click()

  }


  static choosePlan(period, plan){
    cy.get(planPeriod_btns, {timeout: 30 * 1000}).contains(period).click();
    cy.wrap(plan).as("planType");

    switch (plan) {
      
      case "Essential":
        
        cy.get(plan_btn).eq(0).click();
        
      break;

      case "Awesome":
        
        cy.get(plan_btn).eq(1).click();
        
      break;

      case "Supersonic":
        
        cy.get(plan_btn).eq(2).click();
        
      break;
  
    }
  }

  static clickOn_FirstPlan() {
    cy.get(first_btn).click();
  }

  static clickOn_SecondPlan() {
    cy.get(second_btn).click();
  }

  static clickOn_ThirdPlan() {
    cy.get(third_btn).click();
  }


  static enterVoucher(data){
    this.getRegField(0).type(data);
}



}