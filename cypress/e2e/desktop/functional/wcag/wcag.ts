/// <reference types="Cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import FlightStatusPage from '../../../../pageObject/functional/flightsSearch'

let flightData
beforeEach(function () {
  cy.fixture('agoda.json').then(function (data) {
    flightData = data
  })
  
})

Given('I am on the flight status page', () => {
  cy.visit(flightData.url)
  cy.injectAxe();
});

When('I click the close button on advertisement', () => {
  FlightStatusPage.closeAdvertisement();
});

And('Verify all Accessibility Violations', () => {
  cy.checkA11y();
})

And('Verify only P1, P2 issues', () => {
  cy.checkA11y(null, { includedImpacts: ["critical", "serious"] })
})


