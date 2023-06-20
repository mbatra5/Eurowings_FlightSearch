Feature: Flight Status Validation

@flight_search

Scenario: Verify Eurowings flights are displayed and not Lufthansa

  Given I am on the flight status page
  When I search for a flight
  And click Show more link
  And select Eurowings checkbox
  Then Eurowings flights are displayed
  And I select next date
  Then Eurowings flights are displayed and not Lufthansa