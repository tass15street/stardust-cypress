import BasePage from "../BasePage";

const loginInputFlds =  '.v-text-field__slot input'

export default class loginPage extends BasePage {

  static enterLoginUser(user) {

    cy.fixture('profiles').then(data =>{

      switch (user) {
        case "sad":
          this.getLoginFlds(0).type(data.es_pay_account)
          break;


        case "Essential Paid":
          this.getLoginFlds(0).type(data.es_pay_account)
          break;

        case "Essential":
          this.getLoginFlds(0).type(data.es_account)
          break;

        case "Awesome Paid":
          this.getLoginFlds(0).type(data.aw_paid_account)
          break;

        case "Awesome":
          this.getLoginFlds(0).type(data.aw_account)
          break;

        case "Supersonic Paid":
          this.getLoginFlds(0).type(data.ss_paid_account)
          break;

        case "Supersonic":
          this.getLoginFlds(0).type(data.ss_account)
          break;
      }


       this.getLoginFlds(1).type(data.password)



    })
  }


  static enterLogin(details) {

    
    cy.fixture('profiles').then(data =>{
    switch (details) {

      case "Sad":
        this.getLoginFlds(0).type(data.sd_login)
        this.getLoginFlds(1).type(data.password)
        break;

        case "Happy":
          this.getLoginFlds(0).type(data.hp_login)
          this.getLoginFlds(1).type(data.password)
          break;

        case "Custom":
          cy.get(this.getGlobalEmail()).then((email) =>{
            this.getLoginFlds(0).type(email)
            });
          this.getLoginFlds(1).type(data.password)
          break;
      }
    })
   


}



static getLoginFlds(indx){
  return cy.get(loginInputFlds).eq(indx)
}


}
