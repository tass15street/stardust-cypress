import BasePage from "../BasePage";






export default class ConfirmPlanPage extends BasePage {


    static acceptConditions(cnd){
        switch(cnd)
        {
            case "terms":
            this.pause(2000)
            this.changeBlocker()
            this.selectTerms(1);
            break;

            case "offers":
            this.changeBlocker()
            this.selectOffers(0);
            break;
        }

    }

    





}

    