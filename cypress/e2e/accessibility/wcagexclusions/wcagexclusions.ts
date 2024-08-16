/// <reference types="Cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { terminalLog } from '../../../support/accessibilityLogger';

let flightData;
beforeEach(function () {
});

Given('I am on the page', () => {
  cy.visit('https://amazon.in');
  cy.setupA11y(); // Set up accessibility testing configuration after visiting the URL
});

And('Verify the violations excluding a tag', () => {
  cy.checkA11yExcludeTags('._fluid-quad-image-label-v2_style_fluidQuadImageLabelBody__3tld0', ['img']);
});

And('Exclude all image tags', () => {
  cy.checkA11yExcludeElements(['img']);
});