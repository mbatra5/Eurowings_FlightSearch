// cypress/support/wcagcommands.ts

import 'cypress-axe';
import { terminalLog } from './accessibilityLogger'
require('cypress-xpath');

// Command to set up accessibility testing with WCAG 2.1 AA standards
Cypress.Commands.add('setupA11y', (options: any = {}) => {
  cy.injectAxe();
  cy.configureAxe({
    runOnly: {
      type: 'tag',
      values: ['wcag2a','wcag2aa','wcag21aa','wcag21a','best-practice']
    },
    ...options // Allow additional options to be passed in if needed
  });
});

// Command to check for all impacts
Cypress.Commands.add('checkA11yAllImpacts', (context = null, callback = terminalLog) => {
  cy.checkA11y(context, {
    includedImpacts: ['critical', 'serious', 'moderate', 'minor']
  }, callback);
});

// Command to check a specific locator
Cypress.Commands.add('checkA11yForLocator', (locator: string) => {
  cy.checkA11y(locator, null, terminalLog);
});

Cypress.Commands.add('checkA11yExcludeTags', (parentLocator: string, excludeChildSelectors: string[], callback = terminalLog) => {
  cy.get(parentLocator).then($el => {
    const parentElement = $el[0];

    // Perform the accessibility check on the parent element with exclusions
    cy.checkA11y({
      include: [parentElement],
      exclude: excludeChildSelectors
    }, null, callback);
  });
});

// Command to check for best practices
Cypress.Commands.add('checkA11yBestPractices', (context: string | null = null) => {
  cy.checkA11y(context, {
    runOnly: {
      type: 'tag',
      values: ['best-practice']
    }
  }, terminalLog);
});

Cypress.Commands.add('checkA11yExcludeElements', (excludeTags: string[], callback = terminalLog) => {
  // Perform the accessibility check on the entire page with exclusions
  cy.checkA11y({
    exclude: excludeTags
  }, null, callback);
});

// Command to check only P1 and P2 issues
Cypress.Commands.add('checkA11yP1P2', (callback = terminalLog) => {
  cy.checkA11y(null, {
    includedImpacts: ['critical', 'serious']
  }, callback);
});

Cypress.Commands.add('checkA11yForXPath', (xpath: string, callback = terminalLog) => {
  cy.xpath(xpath).then($el => {
    cy.checkA11y($el, null, callback);
  });
});

Cypress.Commands.add('checkA11yForXPathExcludeTags', (xpath: string, excludeTags: string[], callback = terminalLog) => {
  cy.xpath(xpath).then($el => {
    // Perform the accessibility check on the element with exclusions
    cy.checkA11y({
      include: $el,
      exclude: excludeTags
    }, null, callback);
  });
});

Cypress.Commands.add('checkA11yForRules', (ruleIds: string[], callback = terminalLog) => {
  cy.checkA11y(null, {
    runOnly: {
      type: 'rule',
      values: ruleIds
    }
  }, callback);
});

Cypress.Commands.add('checkA11yExcludeRules', (ruleIds: string[], callback = terminalLog) => {
  const rulesConfig = ruleIds.reduce((acc, ruleId) => {
    acc[ruleId] = { enabled: false };
    return acc;
  }, {});

  cy.checkA11y(null, {
    rules: rulesConfig
  }, callback);
});