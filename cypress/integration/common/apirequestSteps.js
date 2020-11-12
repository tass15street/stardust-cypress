import StardustHome from "../page-objects/pages/HomePage";
import apiRequest from "../page-objects/pages/ApiRequests";


defineStep("a new subscription is created for a plan {string} and period of {string}", (period, plan) => {

    apiRequest.getPeriodAndPlan(period, plan)
  
  });