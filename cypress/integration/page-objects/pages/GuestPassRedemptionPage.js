import BasePage from "../BasePage";



const availableGuessPass  = '.simple-card'
const guestPassCode = '.guest-code .code'
const code = 'passCode'
const goOnline = 'Go Online'



export default class GuestPassRedemptionPage extends BasePage {

    static fill_GuestRedemption(details){


        cy.fixture("guestRedemption").then(data => {
    
            switch (details) {
    
              case "createRedemption":
                cy.get("@passCode").then((code) => {

                    this.enterRedemption(code)
                
                });
                this.changeBlocker();
                this.selectTerms(0);
                
                cy.get("@regSetEmail").then((email) =>{
                cy.log(email);
                });

                break;

                case "invalidRedemption":
                this.enterRedemption(data.invalidCode)
                this.selectTerms(0);
                this.getControlDisabled();
                break;   
            };

        });
    }

    static enterRedemption(data){
        this.getRegField(0).type(data);
    }

}