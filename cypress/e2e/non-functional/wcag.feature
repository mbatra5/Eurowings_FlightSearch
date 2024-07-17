Feature: Web Accessibility Tests

Background:
  Given I am on the home page
 # When I accept the cookies 

Scenario: Verify all WCAG Violations
  And Verify all Accessibility Violations

Scenario: Verify P1,P2 WCAG Violations
  And Verify only P1, P2 issues
