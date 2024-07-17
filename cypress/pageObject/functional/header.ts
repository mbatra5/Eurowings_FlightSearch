
const
    MyAccountLink = '#navV2-myAccount .pan-hideInMob.pan-nav-right-overlay-label',
    // profileIcon ='.right-nav > #navV2-myAccount',
    loginOverlay= '.pan-menu-myaccount.pan-menu-overlay-content.pan-nav-right-overlay',
    loginOverlayHeading= '.pan-nav-right-overlay h2.pan-menu-overlay-title',
    emailField = '#login-form_j_username',
    password = '#login-form_j_password',
    submitButton = 'input[value=Submit]',
    welcomeMsg = '.pan-menu-user-details',
    loginFailureMsg='.base-forms-field-error',
    forgetPwdLink='.base-link.pan-forget-password-link',
    resetPasswordHeading = '.pan-generic-header-info>h1',
    resetEmail ='#pan-recover-password-form_email',
    emailFieldErrorMessage ='#login-form_j_username-error',
    passwordFieldErrorMessage ='#login-form_j_password-error'


class Header {


    getMyAccountLink =() => {
        return cy.get(MyAccountLink)
    }

    loginOverlay =() =>{
        return loginOverlay
    }

    getEmailTextBox() {
        return cy.get(emailField)
    }

    getPasswordTextBox() {
        return cy.get(password)
    }

    getSubmitButton() {
        return cy.get(submitButton)
    }

    getWelcomeMsg ()  {
        return welcomeMsg
    }

    loginFailureMsg () {
        return loginFailureMsg
    }

    getforgetPasswordLink() {
        return cy.get(forgetPwdLink)
    }
    
    getresetPasswordHeading(){
        return resetPasswordHeading
    }
    
    getresetEmail(){
        return resetEmail
    }
    getemptyEmailFieldError(){
        return emailFieldErrorMessage
    }

    getemptyPasswordFieldError(){
        return passwordFieldErrorMessage
    }
}

export default Header