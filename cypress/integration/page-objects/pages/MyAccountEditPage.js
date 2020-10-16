
import BasePage from "../BasePage";


const firstName = ".field-block:nth-child(2) > .field";
const lastName = ".field-block:nth-child(3) > .field";
const loginEmail = ".field-block:nth-child(4) > .field";
const mobile = ".field-block:nth-child(5) > .field";
const fieldError = ".is-invalid-field .error-message";
const currentPassword = ".field-block:nth-child(8) > .field";
const newPassword = ".field-block .new-password";
const confirmNewPassword = ".field-block:nth-child(10) > .field";


export default class MyAccountEditPage extends BasePage {

  static restorePassword(){
    cy.fixture("userValidation").then(data => {
      this.getField(currentPassword).clear().type(data.new_password);
      this.getField(newPassword).clear().type(data.crt_password);
      this.getField(confirmNewPassword).clear().type(data.crt_password);
    })
  }

  static fill_Password(details) {

    cy.fixture("userValidation").then(data => {
      switch (details) {
        case "newPassword":
          this.getField(currentPassword).clear().type(data.crt_password);
          this.getField(newPassword).clear().type(data.new_password);
          this.getField(confirmNewPassword).clear().type(data.new_password);
          break;

        case "invalidCurrentPassword":
          this.getField(currentPassword).clear().type(data.nonMatchPassword);
          this.getField(newPassword).clear().type(data.new_password);
          this.getField(confirmNewPassword).clear().type(data.new_password);
          break;

        case "nonMatchingPasswords":
          this.getField(currentPassword).clear().type(data.crt_password);
          this.getField(newPassword).clear().type(data.nonMatchPassword);
          this.getField(confirmNewPassword).clear().type(data.crt_password);

          this.getErrorMsg(fieldError).invoke("text").then(msg => {

            this.getNamedControlDisabled("Update password");
            expect(msg).to.eq(data.msg_nonMatchingPasswords);
          });

          break;
      }
    });
  }

  static fill_EditDetails(details) {
    cy.fixture("userValidation").then(data => {

      switch (details) {
        case "longText":
          this.getField(firstName).clear().type(data.long_text);
          this.getField(lastName).clear().type(data.field_length);
          break;

        case "invalidPhone":
          this.getField(mobile).clear().type(data.invalidPhone);
          this.getErrorMsg(fieldError).invoke("text").then(msg => {

            this.getActionDisabled();
            expect(msg).to.eq(data.msg_inv_mobile);
          });
          break;

        case "invalidEmail":

          this.getField(loginEmail).clear().type(data.invalidEmail);
          this.getErrorMsg(fieldError).invoke("text").then(msg => {

            this.getActionDisabled();
            expect(msg).to.eq(data.msg_loginEmail + data.msg_invEmail);
          });

          break;

        case "field_length":

          //firstName
          this.getField(firstName).clear().type(data.field_length);
          this.getErrorMsg(fieldError).invoke("text").then(msg => {

            this.getActionDisabled();
            expect(msg).to.eq(data.msg_firstName + data.msg_length);
          });

          this.getField(firstName).clear().type(data.upd_names);

          //lastName
          this.getField(lastName).clear().type(data.field_length);
          this.getErrorMsg(fieldError).invoke("text").then(msg => {

            this.getActionDisabled();
            expect(msg).to.eq(data.msg_lastName + data.msg_length);
          });

          this.getField(lastName).clear().type(data.upd_names);
          break;

        case "duplicateEmail":

          this.getField(loginEmail).clear().type(data.duplicateEmail);
          break;

        case "required":

          //firstName
          this.getField(firstName).clear().type(data.required);
          this.getErrorMsg(fieldError).invoke("text").then(msg => {

            this.getActionDisabled();
            expect(msg).to.eq(data.msg_firstName + data.msg_required);
          });

          this.getField(firstName).clear().type(data.upd_names);

          //lastName
          this.getField(lastName).clear().type(data.required);
          this.getErrorMsg(fieldError).invoke("text").then(msg => {

            this.getActionDisabled();
            expect(msg).to.eq(data.msg_lastName + data.msg_required);
          });

          this.getField(lastName).clear().type(data.upd_names);


          //email
          this.getField(loginEmail).clear().type(data.required);
          this.getErrorMsg(fieldError).invoke("text").then(msg => {

            this.getActionDisabled();
            expect(msg).to.eq(data.msg_loginEmail + data.msg_invEmail);
          });

          this.getField(loginEmail).clear().type(data.email);


          //mobile
          this.getField(mobile).clear().type(data.required);
          this.getErrorMsg(fieldError).invoke("text").then(msg => {

            this.getActionDisabled();
            expect(msg).to.eq(data.msg_mobile + data.msg_required);
          });

          this.getField(mobile).clear().type(data.normalPhone);
          break;

      }


    });


  }



  static getErrorMsg(field) {
    return cy.get(field).eq(0);

  }

  static checkUpdButtonStatus() {

    return;
  }


}
