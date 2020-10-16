import dashboardPage from "../page-objects/pages/DashboardPage";
import stardustHome from "../page-objects/pages/HomePage";

defineStep("the dashboard page is displayed showing the login text", user => {

    dashboardPage.checkLoginTxt();

  });


  defineStep("Logout of App", user => {

    stardustHome.logOut()
    stardustHome.pause(4000)

  
  });