Feature: Flight Status

@flight_search

Scenario: Search for a flight status on devices

  Given I am on the flight status page
  When I click the close button on advertisement
  And I enter the departure airport as "CGN"
  And I select "Cologne Bonn Airport" from the results
  And I enter the destination as "BER"
  And I select "BER" from the results
  And I select the travel date
  And I click the Search Flights button
  Then I should see the flight search results
  And the results should include flights for searched airports
  And the selected date should be highlighted