/// <reference types="Cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import FlightStatusPage from '../../../../pageObject/functional/flightsSearch'

const testName = 'Flights Page'
const executionType = 'chrome'

let flightData
before(function () {
  cy.fixture('agoda.json').then(function (data) {
    flightData = data
  })
  
})

Given('I am on the flight status page', () => {
  cy.visit(flightData.url)
});

When('I click the close button on advertisement', () => {
  FlightStatusPage.closeAdvertisement();
});

And('take the page snapshot', () => { 
  cy.takeScreenshot('Flights page')
})
