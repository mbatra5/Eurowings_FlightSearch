
const
    profileIcon = ':nth-child(4) > .vca-sm-list .vca-lightbox-trigger > .vca-icn-profile',
    emailField = '//input[@id="login-form-ajax_j_username"]',
    password = '#login-form-ajax_j_password',
    submitButton = '.auto-test-forms-button-submit[value="Submit"] ',
    forgetpasswordButton = '/html/body/div[6]/div[2]/div/div/div/div[1]/section/div[3]/div/div[2]/a/span',
    signoutButton = '//*[@id="mainContent"]/div/div/div[1]/section/a',
    errorMessage = '.base-forms-field-error',
    errorInstructions = '.base-forms-instruction',
    myaccountHeading = '.vca-ma-parent.vca-section',
    createAccountTab = '.vca-register-tab',
    createAccountFN = 'input[name="first_name1"]',
    createAccountLN = 'input[name="last_name1"]',
    locationDropdown = 'select[name="website_ country"]',
    createAccountEmail = 'input[name="email_address"]',
    createAccountPwd = 'input[name="password"]',
    createAccountSubmitButton = '.base-js-submit-button[value="CREATE AN ACCOUNT"]'


class HomePage {


    getProfileIcon = () => {
        return cy.get(profileIcon)
    }

    getEmailTextBox() {
        return cy.xpath(emailField)
    }
    getPasswordTextBox() {
        return cy.get(password)
    }
    getSubmitButton() {
        return cy.get(submitButton)
    }
    getErrorMessage() {
        return errorMessage
    }
    getErrorInstructions() {
        return errorInstructions
    }
    getForgetPasswordButton(){
        return cy.get(forgetpasswordButton)
    }
    getmyAccountHeading = () => {
        return myaccountHeading
    }
    getsignoutButton = () =>{
        return cy.get(signoutButton)
    }
    getCreatAccountTab = () => {
        return cy.get(createAccountTab)
    }
    getcreateAccountFN = () => {
        return cy.get(createAccountFN)
    }
    getcreateAccountLN = () => {
        return cy.get(createAccountLN)
    }
    getlocationDropdown = () => {
        return cy.get(locationDropdown)
    }
    getscrollcreateAccountEmail = () => {
        return createAccountEmail
    }

    getcreateAccountEmail = () => {
        return cy.get(createAccountEmail)
    }
    getcreateAccountPassword = () => {
        return cy.get(createAccountPwd)
    }
    getcreateAccountSubmitButton = () => {
        return cy.get(createAccountSubmitButton)
    }
}

export default HomePage