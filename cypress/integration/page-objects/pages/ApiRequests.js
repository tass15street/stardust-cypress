//import BasePage from "../BasePage";

const four_week = "4week"
const essential = "Essential"
const signup_voucher = 'mine'
const globalEmail = '@regSetEmail'

export default class ApiRequests{

static getGlobalEmail(){
  return globalEmail
   
} 
  static getPeriodAndPlan(period, plan) {
  
    this.setPeriod(period)
    this.setPlan(plan)
    this.getSignupUser()
    this.getPlansForSite()
    this.createPaidUserSubscription()
  }

  static setPeriod(period){
    switch (period) {

      case "1year":
        cy.wrap(period).as("chosenPeriod")
        break;

      case "1month":
        cy.wrap(period).as("chosenPeriod")
        break;

        case "1week":
          cy.wrap(period).as("chosenPeriod")
        break;

        case "1day":
          cy.wrap(period).as("chosenPeriod")
        break;

    }
  }

  static setPlan(plan){
    switch (plan) {

      case "Essential":
        cy.wrap(plan).as("chosenPlan")
        break;

      case "Awesome":
        cy.wrap(plan).as("chosenPlan")
        break;

        case "Supersonic":
          cy.wrap(plan).as("chosenPlan")
        break;
  }
  this.setEmail(plan)
}

  static createPaidUserSubscription(){
    cy.get("@userId").then((userId) => {     
        cy.get("@productRatePlanId").then((sitePlan) => {          
        cy.request({
          method: "POST",
          url: "https://api.qa.stardust.wifinity.codes/subscription",
          headers: {
            "X-Go-Home": "{ \"customer_code\": \"WIF010\", \"user_id\": \"" + userId + "\"}",
            "Content-Type": "application/json"
          },
          body:
            "{\"couponCode\": \"" + signup_voucher + "\", \"planId\": \"" + sitePlan + "\", \"quantities\": {\"Base Package\": 1}}"
      
        }).then((resp) => {

          expect(resp.status).to.eq(200)

          })
        })
        
      })
}
  static getSignupUser(){

   cy.get(this.getGlobalEmail()).then((email) => {
  

    cy.request({
      method: "POST",
      url: "https://api.qa.stardust.wifinity.codes/user",
      headers: {
        "X-Go-Home": "{ \"customer_code\": \"WIF010\", \"nas_id\": \"LYNE\", \"location_id\": \"LYNE\"}"
      },
      body: {
        "email": email,
        "password": "test1234",
        "firstName": "test",
        "lastName": "test",
        "mobile": "01234567890",
        "privacyPolicy": true,
        "smsOptIn": false,
        "marketingOptIn": false,
        "autoAddDevice": false
       }
      }).then((resp) => {

       cy.wrap(resp.body.userId).as("userId")

    })
  })
  }

  static getPlansForSite() {

    cy.get("@chosenPlan").then((chosenPlan) => { 
    cy.get("@chosenPeriod").then((chosenPeriod) => { 
     
    cy.request({
      method: "GET",
      url: "https://api.qa.stardust.wifinity.codes/plans/site/LYNE",
      headers: {
        "X-Go-Home": "{ \"customer_code\": \"WIF010\", \"nas_id\": \"LYNE\", \"location_id\": \"LYNE\"}"
      }
    }).its("body").then((body) => {

      body.forEach((vals) => {
        if (vals["category"].trim().includes(chosenPeriod) && vals["publicName"].trim().includes(chosenPlan)) {
          cy.wrap( vals["productRatePlanId"]).as("productRatePlanId")
          cy.log(vals["productRatePlanId"]);
        }
      })
    })
  })
})
}


static setEmail(planType) {
  cy.wrap(planType + "_" + Cypress.moment().format("YYMMDDHHmmss") + "@test.com").as("regSetEmail")

}
}

 

