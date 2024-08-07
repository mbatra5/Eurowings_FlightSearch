Feature: Storybook CTA component in light and dark mode

Scenario: Storybook CTA component in light and dark mode 
  Given user opens the CTA page in light mode
  Then CTA in light should display as expected

  When opens the CTA page in dark mode
  Then CTA in dark should display as expected