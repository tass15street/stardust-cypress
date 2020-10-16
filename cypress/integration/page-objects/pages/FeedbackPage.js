import BasePage from '../BasePage'

const name = '#name'
const email = '#email'
const subject = '#subject'
const comment = '#comment'



export default class FeedbackPage extends BasePage {

    static load() {
        cy.visit('http://zero.webappsecurity.com/feedback.html')
    }


    static sendFeedback() {

        cy.contains('Send Message').click()
    }

    static fillFeedback() {

        cy.fixture('feedback').then(data =>{

            cy.get(name).type(data.name)
            cy.get(email).type(data.email)
            cy.get(subject).type(data.subject)
            cy.get(comment).type(data.message)

        })
    }


    static checkFeedbackSubmission() {

        cy.contains('Thank you for your comments').should('be.visible')
    }



    static submitFeedback() {
        cy.fixture('feedback').then(data =>{

            const name = data.name
            const email = data.email
            const subject = data.subject
            const message = data.message
           
            cy.get('#name').type(name)
            cy.get('#email').type(email)
            cy.get('#subject').type(subject)
            cy.get('#comment').type(message)
            cy.contains('Send Message').click()
    
        })


    }

}