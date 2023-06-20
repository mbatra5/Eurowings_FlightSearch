import FlightStatusPage from "../pageObject/functional/flightsSearch"

class FlightSearch{
        static searchFlight(){
        // fetching data from fixture
        cy.fixture('agoda.json').then((fixtureData) => {
        // searching flight function
        FlightStatusPage.closeAdvertisement()
        // entering origin
        FlightStatusPage.OriginAirport().type(fixtureData.originAirport)
        FlightStatusPage.selectOriginAirport().should("have.text",fixtureData.originAirportName)
        //selecting origin from the list
        FlightStatusPage.selectOriginAirport().click()
        //entering destination in field
        FlightStatusPage.DestinationAirport().type(fixtureData.destinationAirport)
        FlightStatusPage.selectDestinationAirport().should("have.text",fixtureData.destinationAirport)
        //selecting destination from list
        FlightStatusPage.selectDestinationAirport().click()
        cy.isVisible(FlightStatusPage.seeCalendar())
        //selecting date from calander
        FlightStatusPage.selectDate(fixtureData.travelDate)
        FlightStatusPage.searchFlightsButton()
        cy.isVisible(FlightStatusPage.flightHeadingVisibility())
        cy.shouldIncludeText(FlightStatusPage.flightHeadingVisibility(),fixtureData.selectedflightText)
        cy.isVisible(FlightStatusPage.currentDateHighlighted())
        .shouldIncludeText(FlightStatusPage.currentDateHighlighted(),fixtureData.selectedDate)
    })
    }
        static filterResult(data: string){
            cy.get(FlightStatusPage.airlinesNameHeader()).each(($el) => {
                cy.wrap($el).find(FlightStatusPage.selectedAirlineName(), {timeout: 10000}).
                shouldHaveText(FlightStatusPage.airlinesNameHeaderAllFlights(),data)
              })
        }
    }
        

    export default FlightSearch