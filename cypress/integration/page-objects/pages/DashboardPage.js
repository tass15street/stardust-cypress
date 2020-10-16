import BasePage from "../BasePage";

const loginTxt = ".user-data span";
const lgtxt = "You are logged in as"
const menuItems = ".navbar-menu a"



export default class DashboardPage extends BasePage {

  static checkLoginTxt() {
    return cy.get(loginTxt, { timeout: 30 * 1000  }).contains(lgtxt)
  }


  static getMainMenuItems(item){

   return cy.get(menuItems, { timeout: 30 * 1000  }).contains(item)
  }

}