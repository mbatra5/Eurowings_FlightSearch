# Eurowings
Flight Search

# Types of Testing Included:

Desktop: Functional Testing
Devices: Functional Testing
Accessibility Testing using Cypress+Axe
Visual automation using Applitools Ultra Fast Grid

# Video of test runs under: 
cypress/videos

# HTML Report using Mochawesome Reporter:
cypress/mochawesome-report

# HTML Report:
cypress/mochawesome-report/cypress-combined-report.html

# Command to Run Tests:

# Update Percy token:
$Env:PERCY_TOKEN="{Your Token}"    
npx percy exec -- cypress run --spec 'cypress/e2e/desktop/functional/agoda_visual.feature'

Test Script desktop folder : /cypress/e2e/desktop/functional/agoda_search
Test Script devices folder : /cypress/e2e/devices/functional/agoda_search
Feature File : /cypress/e2e/desktop/functional

PageObjects : cypress/pageObject/functional

Text Data / Fixtures: cypress/fixtures

Assertions / Custom Commands: cypress/support

Accessibility Testing Framework with Cypress
Overview
This project enhances Cypress with custom commands to perform automated accessibility testing. It ensures that web pages comply with accessibility standards, making them usable for everyone, including people with disabilities.

Key Features
Automated Accessibility Checks
We have integrated cypress-axe, a powerful library for accessibility testing, into our Cypress tests. This allows us to automatically check web pages for accessibility issues.

Custom Commands
To make accessibility testing easier and more flexible, we have created several custom commands. These commands can be used in our tests to check different aspects of accessibility.

Detailed Logging
We have implemented detailed logging of accessibility issues. When an issue is found, it is logged in a readable format, making it easy to understand and fix.

How It Works
Setup
Install Dependencies: We have installed necessary libraries like cypress-axe and cypress-xpath.
Plugins Configuration: We have configured Cypress plugins to support custom logging tasks.
Support Files: We have created support files to define custom commands and logging functions.
Custom Commands
Here are some of the custom commands we have created:

Check All Impacts: This command checks the entire page or a specific element for all types of accessibility issues.
Check Specific Locator: This command checks a specific element on the page for accessibility issues.
Exclude Tags: This command checks a parent element but excludes certain child elements from the check.
Best Practices: This command checks the page for best practice accessibility guidelines.
Setup Command: This command sets up the necessary configuration for accessibility testing.
Exclude Elements: This command checks the entire page but excludes specific HTML elements from the results.
P1 and P2 Issues: This command focuses on critical and serious accessibility issues.
XPath Support: We have commands that support XPath selectors for more flexible element targeting.
Logging
We have implemented a logging function that logs accessibility issues in a readable format. This makes it easy to understand what issues were found and where they are located on the page.

Usage Example
Here's a simple example of how to use these custom commands in a test:

/// <reference types="Cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import FlightStatusPage from '../../../../pageObject/functional/flightsSearch';
import { terminalLog } from '../../../../support/accessibilityLogger'; // Ensure this path is correct

let flightData;
beforeEach(function () {
  cy.fixture('agoda.json').then(function (data) {
    flightData = data;
  });
});

Given('I am on the flight status page', () => {
  cy.visit(flightData.url);
  cy.injectAxe();
});

When('I click the close button on advertisement', () => {
  FlightStatusPage.closeAdvertisement();
});

And('Verify all Accessibility Violations', () => {
  cy.checkA11yAllImpacts(null, terminalLog);
});
In this example:

We visit a flight status page.
We inject Axe for accessibility testing.
We close an advertisement.
We check the entire page for accessibility issues and log any violations.
Conclusion
This framework provides a robust and flexible way to ensure your web pages are accessible to everyone. By integrating automated accessibility checks into your Cypress tests, you can catch and fix issues early, improving the overall user experience.

