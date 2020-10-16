import BasePage from "../BasePage";


const paymentIframe = '.__PrivateStripeElement > iframe'
const nameOnCard = ".field-block:nth-child(1) > .field";
const cardNumberField = ".CardNumberField .InputElement";
const cardNumberExpiry = ".CardField-expiry .InputElement"
const cardNumberCVC = ".CardField-cvc .InputElement"
const paymBtn = 'Continue to Payment'
const closeBtn = 'Close'
const fieldError = ".v-messages__message";



export default class PaymentMethod extends BasePage {

  static fill_Payment(details) {

    this.clearPaymFields()
    cy.fixture("paymentValidation").then(data => {
      switch (details) {

        case "happy":
         cy.get(paymentIframe)
         .iframe().then($element => {

        cy.wrap($element).find(cardNumberField).type(data.valid_payment)
        cy.wrap($element).find(cardNumberExpiry).type(data.payment_exp)
        cy.wrap($element).find(cardNumberCVC).type(data.payment_cvc)
      
       })
       this.selectBtn(paymBtn)  
       break;

      case "sad":
        cy.get(paymentIframe)
        .iframe().then($element => {

        cy.wrap($element).find(cardNumberField).type(data.invalid_payment)
        cy.wrap($element).find(cardNumberExpiry).type(data.payment_exp)
        cy.wrap($element).find(cardNumberCVC).type(data.payment_cvc)

        cy.get(fieldError).invoke("text").then(msg => {
          this.getControlDisabled();
            expect(msg).to.eq(data.msg_inv_cardNumber);
          });

        })
        break;

        case "insufficient_payment":
          cy.get(paymentIframe)
          .iframe().then($element => {

          cy.wrap($element).find(cardNumberField).type(data.insufficient_payment)
          cy.wrap($element).find(cardNumberExpiry).type(data.payment_exp)
          cy.wrap($element).find(cardNumberCVC).type(data.payment_cvc)

          })
          this.selectBtn(paymBtn)
          this.checkMsg(data.msg_insufficent_cardNumber) 
          this.selectBtn(closeBtn)  
        break;
  
        case "decline_payment":
          cy.get(paymentIframe)
          .iframe().then($element => {

          cy.wrap($element).find(cardNumberField).type(data.decline_payment)
          cy.wrap($element).find(cardNumberExpiry).type(data.payment_exp)
          cy.wrap($element).find(cardNumberCVC).type(data.payment_cvc)

          })
          this.selectBtn(paymBtn)  
          this.checkMsg(data.msg_decline_cardNumber) 
          this.selectBtn(closeBtn)  
          break;
    
          case "incorrect_cvc_payment":
            cy.get(paymentIframe)
            .iframe().then($element => {
  
            cy.wrap($element).find(cardNumberField).type(data.incorrect_cvc_payment)
            cy.wrap($element).find(cardNumberExpiry).type(data.payment_exp)
            cy.wrap($element).find(cardNumberCVC).type(data.payment_cvc)

            })
            this.selectBtn(paymBtn)  
            this.checkMsg(data.msg_incorrect_cvc_payment) 
            this.selectBtn(closeBtn)  
            break;
    
          case "expired_card_payment":
            cy.get(paymentIframe)
            .iframe().then($element => {
  
            cy.wrap($element).find(cardNumberField).type(data.expired_card_payment)
            cy.wrap($element).find(cardNumberExpiry).type(data.payment_exp)
            cy.wrap($element).find(cardNumberCVC).type(data.payment_cvc)

            })
            this.selectBtn(paymBtn)  
            this.checkMsg(data.msg_expired_card_payment) 
            this.selectBtn(closeBtn)  
            break;
    
          case "processing_error_payment":
            cy.get(paymentIframe)
            .iframe().then($element => {
  
            cy.wrap($element).find(cardNumberField).type(data.processing_error_payment)
            cy.wrap($element).find(cardNumberExpiry).type(data.payment_exp)
            cy.wrap($element).find(cardNumberCVC).type(data.payment_cvc)

            })
            this.selectBtn(paymBtn)  
            this.checkMsg(data.msg_processing_error_payment) 
            this.selectBtn(closeBtn)  
            break;
      }
    });
  }


  static getErrorMessage(msg){

   return cy.get(fieldError).contains(msg)
  }


  static checkMsg(msg){
    this.showErrorMessage().invoke('text').then(($txt) => {
    
      expect($txt).to.contain(msg)
    });
  }

  static clearPaymFields(){
    cy.get(paymentIframe)
    .iframe().then($element => {

    cy.wrap($element).find(cardNumberField).clear()
    cy.wrap($element).find(cardNumberExpiry).clear()
    cy.wrap($element).find(cardNumberCVC).clear()

    })
  }

  static fillPaymentFields(){
  
    cy.get(paymentIframe)
    .iframe().then($element => {

      cy.wrap($element).find(cardNumberField).type("4242424242424242")
      cy.wrap($element).find(cardNumberExpiry).type("0325")
      cy.wrap($element).find(cardNumberCVC).type("321")
      

    })
    

     

      /*
    cy.iframe().find('.__PrivateStripeElement > iframe').then($element => {
   //cy.get('.__PrivateStripeElement > iframe').then($element => {

      //const $body = $element.contents().find('body')
    
      //let stripe = cy.wrap($body)
      cy.get($element).find(cardNumberField).eq(0).click().type('4242424242424242')
      stripe = cy.wrap($body)
      stripe.find('.Input .InputElement').eq(1).click().type('4242')
      stripe = cy.wrap($body)
      stripe.find('.Input .InputElement').eq(2).click().type('424')
    })
    */
  }


}
