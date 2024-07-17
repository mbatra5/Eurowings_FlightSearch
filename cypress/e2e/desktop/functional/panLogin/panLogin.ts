/// <reference types="Cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import Header from '../../../../pageObject/functional/header'
import genericUtil from '../../../../utils/genericUtil'
import UrlUtils from '../../../../utils/pageUrlUtil'


const header = new Header()
// runs once before all tests in the block
let panLoginData
before(function () {
  cy.fixture('panLogin').then(function (data) {
    panLoginData = data
  })
})

//Scenario: Verify redirection to Login section
Given ('User is on the home page',()=>{
    UrlUtils.getPanhomePageUrl()
    cy.takeScreenshotwithoutScroll('Pan Collection Page')
})

When('User click on the My Account icon from header', ()=>{
 header.getMyAccountLink().click()
})

Then('Login overlay should display',function(){
cy.isVisible(header.loginOverlay())
})

// Test Case 2 

Given('User is on the login overlay', () => {
  UrlUtils.getPanhomePageUrl()
  header.getMyAccountLink().click()
})

//Scenario: Successful login with valid credentials
And('User enter valid Email id', function() {
  header.getEmailTextBox().type(panLoginData.email);
})

And('User enter valid password', function() {
  header.getPasswordTextBox().type(panLoginData.password);
})

When('User click the login button', () => {
  header.getSubmitButton().click()
})

Then('User should be logged in successfully and remain on same page', function(){
  cy.checkRedirection(panLoginData.url)
})

And('User click on the My Account icon from header', ()=>{
  header.getMyAccountLink().click()
 })

And ('Login overlay should display',function(){
  cy.isVisible(header.loginOverlay())
  // cy.haveText()
  })
 
And('User should see a welcome header message with user name',function(){
  cy.shouldHaveText(header.getWelcomeMsg(),panLoginData.welcomeText)
})

//Scenario: Validate the Login flow with Invalid credentials 
When('User enters invalid credentials', function(){
    header.getEmailTextBox().type(panLoginData.invalidEmail);
    header.getPasswordTextBox().type(panLoginData.invalidPassword);
})

Then('User should see an error message',function(){
  header.getMyAccountLink().click()
  cy.isVisible(header.loginFailureMsg())
})

//Scenario: Verify Forgotten password link redirection
When('User click on the "Forgot password" link',()=>{
    header.getforgetPasswordLink().click()
})

Then('User should be redirected to the password recovery page', function(){
  cy.checkRedirection(panLoginData.recoverPwdUrl)
  cy.shouldHaveText(header.getresetPasswordHeading(),panLoginData.resetPasswordHeading)    
  cy.takeScreenshotwithoutScroll('Forgot Password Page')
})

And('User should see a form to enter my email', function(){
  cy.isVisible(header.getresetEmail())
})

//Scenario: Verify validation messages for each required input field for Login
When('User left the mandatory field empty and click on login button',()=>{
  header.getSubmitButton().click()
})

Then('User should see an error message for required fields', function(){
  cy.isVisible(header.getemptyEmailFieldError()).shouldHaveText(header.getemptyEmailFieldError(),panLoginData.emailRequiredErrorMessage)
  cy.isVisible(header.getemptyPasswordFieldError()).shouldHaveText(header.getemptyPasswordFieldError(),panLoginData.passwordRequiredErrorMessage)
  cy.takeScreenshotwithoutScroll('Error messages are visible')
})

