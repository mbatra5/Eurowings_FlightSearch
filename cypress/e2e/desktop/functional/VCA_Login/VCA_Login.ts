/// <reference types="Cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import HomePage from '../../../../pageObject/functional/homePage'
import genericUtil from '../../../../utils/genericUtil'
import UrlUtils from '../../../../utils/pageUrlUtil'


const homePage = new HomePage()
// runs once before all tests in the block
let loginData
before(function () {
  cy.fixture('vcaLogin.json').then(function (data) {
    loginData = data
  })
})

// Scenario 1: Login with valid credentials
Given('I navigate to the homepage', () => {
  UrlUtils.gethomePageUrl()
  cy.takeScreenshotwithoutScroll('VCA Homepage')
})

And('I login to site with valid credentials', function(){
  genericUtil.login(this.data.loginEmail, this.data.loginPwd)
})

When('I click on profile icon from header', () => {
  homePage.getProfileIcon().click({force:true})
})

And('I enter in email textbox', function() {
  homePage.getEmailTextBox().type(loginData.email);
})

And('I enter in password textbox',  function() {
  homePage.getPasswordTextBox().type(loginData.password);
  cy.takeScreenshotwithoutScroll('Login Overlay')
})

When('I click on submit button', () => {
  homePage.getSubmitButton().click()
})

Then('I logged in successfully', () => {
  cy.isVisible(homePage.getmyAccountHeading())
})

And ('I click on sign out button',() =>
{
  homePage.getsignoutButton().click()
}) 


// Scenario 2: Login with Invalid credentials	
Given('I navigate to the homepage', () => {
  UrlUtils.gethomePageUrl()
})

And('I login to site with valid credentials', function(){
  genericUtil.login(this.data.loginEmail, this.data.loginPwd)
})

When('I click on profile icon from header', () => {
  homePage.getProfileIcon().click()
})

And('I enter invalid email textbox', function() {
  homePage.getEmailTextBox().type(loginData.invalidEmail);
})

And('I enter invalid password textbox',  function() {
  homePage.getPasswordTextBox().type(loginData.invalidPassword);
})

When('I click on submit button', () => {
  homePage.getSubmitButton().click().wait(5000)
})

Then('user should see an error message', () => {
  cy.isVisible(homePage.getErrorMessage())
})

// Scenario 3: Error validation when mandatory field left empty
Given('I navigate to the homepage', () => {
  UrlUtils.gethomePageUrl()
})

And('I login to site with valid credentials', function(){
  genericUtil.login(this.data.loginEmail, this.data.loginPwd)
})

When('I click on profile icon from header', () => {
  homePage.getProfileIcon().click()
})

And('user has left the mandatory field email empty', function() {
  homePage.getEmailTextBox().type(loginData.emptyEmail);
})

And('user has left the mandatory field password empty',  function() {
  homePage.getPasswordTextBox().type(loginData.emptyPassword);
})

When('I click on submit button', () => {
  homePage.getSubmitButton().click().wait(5000)
})

Then('user should see an error instruction message', () => {
  cy.isVisible(homePage.getErrorInstructions())
  cy.takeScreenshotwithoutScroll('Error Message Appears')
})

