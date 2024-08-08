/// <reference types="Cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { terminalLog } from '../../../support/accessibilityLogger'

let flightData;
beforeEach(function () {
});

Given('I am on the {string} page', (url) => {
    cy.visit(url);
    cy.setupA11y(); // Set up accessibility testing configuration after visiting the URL
  });

And('Verify all Accessibility Violations', () => {
  cy.checkA11yAllImpacts(null, terminalLog);
});

Given('I am on the {string} page', (url) => {
  cy.visit(url);
  cy.setupA11y(); // Set up accessibility testing configuration after visiting the URL
});

And('Verify only P1, P2 issues', () => {
  cy.checkA11yP1P2(terminalLog);
});