/// <reference types="Cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import FlightStatusPage from '../../../../pageObject/functional/flightsSearch'
import FlightSearch from '../../../../utils/flightSearch'

let flightData
before(function () {
  cy.fixture('agoda.json').then(function (data) {
    flightData = data
  })
})

Given('I am on the flight status page', () => {
  cy.visit(flightData.url)
});

When('I search for a flight', () => {
  FlightSearch.searchFlight()
});

And('click Show more link',()=>{
  FlightStatusPage.clickShowMore()
}) 

And('select Eurowings checkbox', () => {
  FlightStatusPage.clickeuroWingsCheckbox()
});

Then('Eurowings flights are displayed', () => {
  cy.isVisible(FlightStatusPage.flightHeadingVisibility())
  cy.shouldIncludeText(FlightStatusPage.flightHeadingVisibility(),flightData.selectedflightText)
  FlightSearch.filterResult(flightData.selectedCheckBox)
});

And('I select next date', () => {
  FlightStatusPage.nextDate(flightData.nextDate)
});

Then('Eurowings flights are displayed and not Lufthansa', () => {
  cy.isVisible(FlightStatusPage.flightHeadingVisibility())
  cy.shouldIncludeText(FlightStatusPage.flightHeadingVisibility(),flightData.selectedflightText)
  FlightSearch.filterResult(flightData.notSelectedAirlines)
});

