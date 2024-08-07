/// <reference types="Cypress" />
/// <reference types="@applitools/eyes-cypress" />

import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

const testName = 'CTA'
const executionType = 'desktop'

before(function () {
    cy.eyesSetup(testName,executionType)
}) 

Given('user opens the CTA page in light mode', () => {
  cy.visit('URL1')
});

Then('CTA in light should display as expected', () => {
  cy.takeScreenshot('CTA in light mode')
})

When('opens the CTA page in dark mode', () => {
  cy.visit('URL2')
});

Then('CTA in dark should display as expected', () => {
  cy.takeScreenshot('CTA in dark mode')
})

after(() => {
  cy.eyesDestroy()
})