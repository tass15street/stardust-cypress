import BasePage from "../BasePage";



const payment = 'Continue to Payment'
const goOnline = 'Go Online'



export default class FinishSignupPage extends BasePage {

    static goOnline(){
        this.selectBtn(goOnline)
    }

    static makePayment(){
        this.selectBtn(payment)
    }

}