import HomePage from "../pageObject/functional/homePage"
let homePage=new HomePage()

class genericUtil{
    static login(email:string,password:string){
            homePage.getProfileIcon().click()
            homePage.getEmailTextBox().type(email)
            homePage.getPasswordTextBox().type(password)
            homePage.getSubmitButton().click()
          }
    }
    export default genericUtil 