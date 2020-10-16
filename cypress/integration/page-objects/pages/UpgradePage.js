import BasePage from "../BasePage";



export default class UpgradePage extends BasePage {

  static checkLoginTxt() {
    return cy.get(loginTxt, { timeout: 30 * 1000  }).contains(lgtxt)
  }


  static getMainMenuItems(item){

   return cy.get(menuItems, { timeout: 30 * 1000  }).contains(item)
  }

}