Feature: Web Accessibility Tests

Background:
  Given I am on the VCA Home page

Scenario: Verify all WCAG Violations
  And Verify all Accessibility Violations

Scenario: Verify P1,P2 WCAG Violations
  And Verify only P1, P2 issues
