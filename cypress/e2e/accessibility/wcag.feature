Feature: Web Accessibility Tests
  
Scenario Outline: Verify all WCAG Violations
  Given I am on the '<url>' page
  And Verify all Accessibility Violations

Scenario Outline: Verify high priority WCAG Violations
  Given I am on the '<url>' page
  And Verify only P1, P2 issues

Examples:
  | url                |
  | https://google.com |
  | https://amazon.in  |
  | https://agoda.com  | 
  | https://bing.com   |
  | https://cypress.io |