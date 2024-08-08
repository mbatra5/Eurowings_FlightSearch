/// <reference types="Cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import FlightStatusPage from '../../../../pageObject/functional/flightsSearch';
import { terminalLog } from '../../../../support/accessibilityLogger';

let flightData;
beforeEach(function () {
  cy.fixture('agoda.json').then(function (data) {
    flightData = data;
  });
  
  // Set up accessibility testing configuration
  cy.setupA11y();
});

Given('I am on the flight status page', () => {
  cy.visit(flightData.url);
  cy.injectAxe();
});

When('I click the close button on advertisement', () => {
 // FlightStatusPage.closeAdvertisement();
});

And('Verify all Accessibility Violations', () => {
  cy.checkA11yAllImpacts(null, terminalLog);
});

And('Verify only P1, P2 issues', () => {
  cy.checkA11yP1P2(terminalLog);
});