import BasePage from "../BasePage";


const firstName = '#input-216'
const lastName = '#input-220'
const email = '#input-225'
const phone = '#input-230'
const password = '#input-234'
const fldErrorMsg = ".v-messages__message";
const duplicateEmail =  ".v-dialog .v-card__text";
const crtAcntbtn = "Create Account"



export default class RegisterAccountPage extends BasePage {

   static fill_PersonalDetails(details){


    cy.fixture("userRegistration").then(data => {

        switch (details) {

          case "createAccount":
            this.populateFormSignup(data)
            this.selectBtn(crtAcntbtn);

          break;
          case "longText":
            cy.get(firstName).type(data.long_text);
            cy.get(lastName).type(data.field_length);
            break;
  
          case "invalidPhone":
            cy.get(phone).type(data.invalidPhone);
            cy.get(password).type(data.required);
            cy.get(fldErrorMsg).eq(1).invoke("text").then(msg => {
  
              this.getControlDisabled();
              expect(msg).to.eq(data.msg_inv_mobile);
            });
            break;
  
          case "invalidEmail":
  
            cy.get(email).type(data.invalidEmail);
            cy.get(phone).type(data.required);
            cy.get(fldErrorMsg).eq(1).invoke("text").then(msg => {
  
              this.getControlDisabled();
              expect(msg).to.eq(data.msg_loginEmail + data.msg_invEmail);
            });
  
            break;

          case "duplicateEmail":
           

            cy.get(duplicateEmail).invoke("text").then(msg => {
  
              expect(msg.trim()).to.eq(data.msg_duplicateEmail);
            });
            break;
  
          case "required":
          //  this.populateFormSignup(data);
  
            //firstName
            cy.get(firstName).clear();
            cy.get(lastName).type(data.required);
            cy.get(fldErrorMsg).eq(0).invoke("text").then(msg => {
  
              this.getControlDisabled();
              expect(msg).to.eq(data.msg_firstName + data.msg_required);
            });
  
            cy.get(firstName).type(data.es_user_name);
  
            //lastName
            cy.get(lastName).clear();
            cy.get(email).type(data.required);
            cy.get(fldErrorMsg).eq(0).invoke("text").then(msg => {
  
              this.getControlDisabled();
              expect(msg).to.eq(data.msg_lastName + data.msg_required);
            });
  
            cy.get(lastName).type(data.es_user_name);
  
  
            //email
            cy.get(email).clear();
            cy.get(phone).type(data.required);
            cy.get(fldErrorMsg).eq(0).invoke("text").then(msg => {
  
              this.getControlDisabled();
              expect(msg).to.eq(data.msg_loginEmail + data.msg_required);
            });
  
            cy.get(email).type(data.email);
  
  
            //mobile
            cy.get(phone).clear();
            cy.get(email).type(data.required);
            cy.get(fldErrorMsg).eq(0).invoke("text").then(msg => {
  
              this.getControlDisabled();
              expect(msg).to.eq(data.msg_mobile + data.msg_required);
            });
  
            cy.get(phone).type(data.normalPhone);
           

           //password
            cy.get(password).clear()
            cy.get(email).type(data.required);
            cy.get(fldErrorMsg).eq(0).invoke("text").then(msg => {
  
              this.getControlDisabled();
              expect(msg).to.eq(data.msg_password + data.msg_required);
            });
            break;
  
        }
  
  
      });

    }

   
  
  


    static createEmail(){
      var strValues = "abcd12345";
      var strEmail = "";
      var strTmp;
      
      for (var i = 0; i < 10; i++) {
          strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
          strEmail = strEmail + strTmp;
      }
    

    strTmp = "";  
    strEmail = "earlycaterpillar@maildrop.cc";

    return strEmail;

    }
    

}

