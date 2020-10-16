
import BasePage from "../BasePage";


const tempEmailAddr = '#mail'
const heading = '.primary-header.alternate-light'
const loginBtn = '.username-display .button'


export default class TempMailPage extends BasePage {


    static visitTempEmail(){
        cy.visit(globalConst.tempEmail_url);

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