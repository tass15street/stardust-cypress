import loginPage from "../page-objects/pages/loginPage";
import StardustHome from "../page-objects/pages/HomePage";

defineStep("user enters and submits {string} credentials", user => {

    StardustHome.selectLogin();
    loginPage.enterLogin(user);
    loginPage.selectBtn("Log In");
  
  });