import BasePage from "../BasePage";



const availableGuessPass  = '.simple-card'
const guestPassCode = '.guest-code .code'
const code = 'passCode'
const goOnline = 'Go Online'



export default class GuestPassPage extends BasePage {

    static getGuessPass(){
        cy.get(availableGuessPass).click()
        cy.get(guestPassCode).invoke('text').then((txt) => {

            cy.wrap(txt).as(code) 
          });


    }

    static makePayment(){
        this.selectBtn(payment)
    }

}