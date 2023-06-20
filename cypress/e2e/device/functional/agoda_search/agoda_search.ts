/// <reference types="Cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import FlightStatusPage from '../../../../pageObject/functional/flightsSearch'

let flightData
before(function () {
  cy.fixture('agoda.json').then(function (data) {
    flightData = data
    cy.viewport('iphone-x')
  })
})

Given('I am on the flight status page', () => {
  cy.visit(flightData.url)
});

When('I click the close button on advertisement', () => {
  FlightStatusPage.closeAdvertisement();
});

And('I enter the departure airport as "CGN"', () => {
  FlightStatusPage.OriginAirport().type(flightData.originAirport)
  FlightStatusPage.selectOriginAirport().should("have.text",flightData.originAirportName)
});

And('I select "Cologne Bonn Airport" from the results', () => {
  FlightStatusPage.selectOriginAirport().click()
});

And('I enter the destination as "BER"', () => {
  FlightStatusPage.DestinationAirport().type(flightData.destinationAirport)
  FlightStatusPage.selectDestinationAirport().should("have.text",flightData.destinationAirport)
});

And('I select "BER" from the results', () => {
  FlightStatusPage.selectDestinationAirport().click()
});

And('I select the travel date', () => {
  cy.isVisible(FlightStatusPage.seeCalendar())
  FlightStatusPage.selectDate(flightData.travelDate)
});

And('I click the Search Flights button', () => {
  FlightStatusPage.searchFlightsButton()
});

Then('I should see the flight search results', () => {
  cy.isVisible(FlightStatusPage.flightHeadingVisibility())
});

And('the results should include flights for searched airports', () => {
  cy.shouldIncludeText(FlightStatusPage.flightHeadingVisibility(),flightData.selectedflightText)
});

And('the selected date should be highlighted', () => {
  cy.isVisible(FlightStatusPage.currentDateHighlighted())
    .shouldIncludeText(FlightStatusPage.currentDateHighlighted(),flightData.selectedDate)
})
