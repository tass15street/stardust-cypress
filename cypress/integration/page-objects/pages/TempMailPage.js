
import BasePage from "../BasePage";
import { tempEmail_url,stardust_homepage_url} from "../../../../config";

const emailFixture = 'emailReset'
const tempEmailAddr = '#mail'
const heading = '.primary-header.alternate-light'
//const loginBtn = '.username-display .button'

const loginInput = '#TextInputField-0'
const loginPassword = '#TextInputField-1'
const loginBtn = 'div.login-page__form-container form button'


const resetEmail = '.link-cell-searchable a'
const emailForgotLink = '#mailcontainer > div > table > tbody > tr:nth-child(3) > td:nth-child(2) > table > tbody > tr:nth-child(2) > td > font > span > a'

const mailBtn = '.C(#4d00ae)'
const termsAgreBtn = '.consent-form button'


//new mail
const mail = '#root > div > div.layout__content > div:nth-child(4) > div > div > div:nth-child(2) > div > div > div:nth-child(1) > span > a'



export default class TempMailPage extends BasePage {


    static visitTempEmail(){
        cy.visit(tempEmail_url);

    }


    static clickMail(){
        cy.get(mail).click()

    }

    static selectEmail(){
        cy.get(resetEmail).eq(0).click()

    }

    static seelectForgotLink(){

        cy.get(emailForgotLink)
        .invoke('attr', 'target', '_blank')
      //  .invoke('attr', 'rel', 'nofollow')
       // .invoke('attr', 'style', 'display: none! important')

        //_blank
        cy.get(emailForgotLink).click()

    }

    static selectForgotLink(){
      cy.contains("Click here to change your password").invoke('attr', 'href').then((lnk) => {
        
        cy.wrap(lnk).as("forgotLnk")
        cy.writeFile('cypress/fixtures/forgetLink.json', { forgetLink: lnk})
        //cy.visit(lnk)
       // cy.wrap(mdlText).as(modalmsg);
      
    });

    }

    static navForget(){

        cy.readFile('cypress/fixtures/forgetLink.json').its('forgetLink').then(getlnk =>{

            cy.visit(getlnk) 
        })
      
    }

    



    static selectMail(){
        cy.get(mailBtn).click()
    }

    static agreeTerms(){
        cy.get(termsAgreBtn).click()
    }

    

    static enterCreds(){
     
        cy.fixture(emailFixture).then(data =>{

            cy.get(loginInput).type(data.login)
            cy.get(loginPassword).type(data.password)

        })

        cy.get(loginBtn).click()
        
    }

    static getResetEmailUrl(){
        /*
       cy.get(tempEmailAddr).invoke('text').then(val => {
           cy.log(val)
       });
       */

       cy.get('#pre_button').type('test{selectall}');
       
        cy.document().then( doc => {
            doc.execCommand('copy');
            cy.task('getClipboard').then((data)=>{ 
                      console.log("Helloooo:"+data); 
                     })
        });
      //  cy.task('getClipboard').should('contain', 'test');

      // cy.get('[data-test=copy-link-button]').click().then(($clipboard) => {
       
   //  });
    }


}