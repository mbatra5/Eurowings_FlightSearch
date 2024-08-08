/// <reference types="Cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import FlightStatusPage from '../../../../pageObject/functional/flightsSearch'

let flightData
beforeEach(function () {
  cy.fixture('agoda.json').then(function (data) {
    flightData = data
  })
  
})

Given('I am on the VCA Home page', () => {
  cy.visit('https://www.google.com')
  cy.injectAxe();
});

And('Verify all Accessibility Violations', () => {
  cy.checkA11y();
})

And('Verify only P1, P2 issues', () => {
  cy.checkA11y(null, { includedImpacts: ["critical", "serious"] })
})


