Feature: Web Accessibility Exclusion Tests

Scenario: Exclude a child tag from parent
  Given I am on the page
  And Verify the violations excluding a tag
  And Exclude all image tags
  