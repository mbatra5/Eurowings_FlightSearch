Feature: Web Accessibility Tests

Background:
  Given I am on the flight status page
  When I click the close button on advertisement

Scenario: Verify all WCAG Violations
  And Verify all Accessibility Violations

Scenario: Verify P1,P2 WCAG Violations
  And Verify only P1, P2 issues
