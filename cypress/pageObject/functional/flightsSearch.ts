const 
closeButton = "button.ab-close-button",
originSearchInput = "#flight-origin-search-input",
selectOriginAirport = "//span[contains(text(),'Cologne Bonn Airport')]",
destinationSearchInput = "#flight-destination-search-input",
selectDestinationAirport = "//span[contains(text(),'BER')]",
calendar = '.DateSelector__Popup',
dateSelector = 'span[data-selenium-date="',
nextDate = '//div[@data-element-name="calendar-date-value"]/span[contains(text(), "',
searchButton = "button[data-selenium='searchButton']",
flightSearchResults = "h1",
selectedDate = "div.CalendarSearchButton__selected--3A-kV",
ShowMore = "[data-component='collapsibleBox-link-open']",
euroWingsCheckbox = '[data-component="flight-filter-item-airline"] [value="Eurowings"]+span',
airlinesNameHeader = '.FlightSlice__header--1U4S8:not([class*="FlightSlice__desktopHeaderMultiple--2VQ6_"])',
airlinesNameHeaderAllFlights = '.FlightSlice__header--1U4S8:not([class*="FlightSlice__desktopHeaderMultiple--2VQ6_"]) .FlightSlice__airline--2QesG',
selectedAirlineName = '.FlightSlice__airline--2QesG'

class FlightStatusPage {

    static closeAdvertisement() {
        return cy.get(closeButton).click();
      }
    
    static OriginAirport() {
        return cy.get(originSearchInput)
    }

    static selectOriginAirport() {
        return cy.xpath(selectOriginAirport)
    }

    static DestinationAirport() {
       return cy.get(destinationSearchInput)
    }

    static selectDestinationAirport() {
        return cy.xpath(selectDestinationAirport)
    }

    static seeCalendar() {
        return calendar
    }

    static flightHeadingVisibility() {
        return flightSearchResults
    }

    static flightResultsVisibility() {
        return cy.get(flightSearchResults)
    }

    static selectDate (date : String) {
        return cy.get(dateSelector + date + '"]').click()
    }
    
    static nextDate (date : String) {
        return cy.xpath(nextDate + date + '")]').click()
    }

    static searchFlightsButton = () => {
        return cy.get(searchButton).click()
    }

    static currentDateHighlighted() {
        return selectedDate
    }

    static clickShowMore() {
        return cy.get(ShowMore).click()
    }

    static clickeuroWingsCheckbox() {
        return cy.get(euroWingsCheckbox).click()
    }

     static airlinesNameHeader() {
        return airlinesNameHeader
    }

    static airlinesNameHeaderAllFlights() {
        return airlinesNameHeaderAllFlights
    }

    static selectedAirlineName() {
        return selectedAirlineName
    }
}

export default FlightStatusPage