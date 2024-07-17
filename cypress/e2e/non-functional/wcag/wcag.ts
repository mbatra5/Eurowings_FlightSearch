/// <reference types="Cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
let castroldata
beforeEach(function () {
  cy.fixture('castrol.json').then(function (data) {
    castroldata = data
  })
  
})

Given('I am on the home page', () => {
  cy.visit('http://qa3-cqp.dtc.cms-pan.akqa.technology:4503/us/en/collections/watch-collection.html')
  cy.injectAxe();
});

/* When('I accept the cookies', () => {
  cy.get('.nr-cookie-notification__cta-button').click()
}); */

And('Verify all Accessibility Violations', () => {
  cy.checkA11y();
})

And('Verify only P1, P2 issues', () => {
  cy.checkA11y(null, { includedImpacts: ["critical", "serious"] })
})


