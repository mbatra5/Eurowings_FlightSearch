// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "cypress-axe";
import '@applitools/eyes-cypress/commands'
import './assertions'
import './commands'
import './iFrameCommands'
import './viewPortCommands'
import 'cypress-cucumber-preprocessor/steps'
import 'cypress-real-events/support'
import 'cypress-xpath'
import 'cypress-mochawesome-reporter/register'
import 'cypress-iframe'
// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception',err => {
    expect((err.message.includes('status')))
      return false
  })