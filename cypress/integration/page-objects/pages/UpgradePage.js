import BasePage from "../BasePage";

const upgradeCard = '.columns.medium-4'
const portalBtn = '.button'


export default class UpgradePage extends BasePage {

    static upgradePlan(plan) {
        cy.get(upgradeCard, { timeout: 30 * 1000  }).each(($el, index, $list) => {

            if($el.text().includes(plan)){
                cy.wrap($el).find(portalBtn).click();
            }

        })
        /*
        cy.get(upgradeCard, { timeout: 30 * 1000  }).then($upgPlan => {
          cy.wrap($upgPlan).contains(plan)
          .parentsUntil(upgradeCard)
          .find(portalBtn).click();
    
        })
        */
        
       
    
     }

}