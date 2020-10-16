//import BasePage from "../BasePage";

const four_week = "4week"
const essential = "Essential"
const signup_voucher = 'mine'

export default class ApiRequests{


  static getPeriodAndPlan(period, plan) {
  
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

        if (plan == "Essential") {

         cy.log(plan)
          cy.wrap(plan).as("chosenPlan")
  
        }else if(plan == "Awesome"){

          cy.wrap(plan).as("chosenPlan")

        }else if(plan == "Supersonic"){

          cy.wrap(plan).as("chosenPlan")

        }

        this.getSignupUser()
        this.getPlansForSite()
        this.createPaidUserSubscription()
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

   // let email = this.setEmail()
  
   this.setEmail("awesome")
   cy.get("@regSetEmail").then((email) => {
  
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

 

