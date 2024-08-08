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
      values: ['wcag2aa','wcag21aa']
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

Cypress.Commands.add('checkA11yExcludeTags', (parentLocator: string, excludeChildSelectors: string[]) => {
  // Perform the accessibility check on the parent element
  cy.checkA11y(parentLocator, null, (violations) => {
    // Filter out violations related to excluded child elements
    const filteredResults = violations.filter((violation) => {
      // Check if any of the exclusion selectors match the violation node
      return !excludeChildSelectors.some(selector => {
        // Convert the violation node to a jQuery object and check if it matches any of the excluded selectors
        return Cypress.$(selector).is(violation.nodes[0].target[0]);
      });
    });

    // Log the violations using terminalLog
    terminalLog(filteredResults);

    // Assert that there are no violations left
    cy.wrap(filteredResults).should('be.empty');
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

Cypress.Commands.add('checkA11yExcludeElements', (excludeTags: string[]) => {
  // Perform the accessibility check on the entire page
  cy.checkA11y(null, {
    runOnly: {
      type: 'tag',
      values: [] // No specific tags, hence all impacts
    }
  }, (violations) => {
    // Filter out violations related to excluded HTML tags
    const filteredResults = violations.filter((violation) => {
      // Check if any of the exclusion tags match the violation node
      return !excludeTags.some(tag => {
        // Convert the violation node to a jQuery object and check if it matches any of the excluded tags
        return Cypress.$(violation.nodes[0].target[0]).is(tag);
      });
    });

    // Log the violations using terminalLog
    terminalLog(filteredResults);

    // Assert that there are no violations left
    cy.wrap(filteredResults).should('be.empty');
  });
});

// Command to check only P1 and P2 issues
Cypress.Commands.add('checkA11yP1P2', (callback = terminalLog) => {
  cy.checkA11y(null, {
    includedImpacts: ['critical', 'serious']
  }, callback);
});

Cypress.Commands.add('checkA11yForXPath', (xpath: string) => {
  cy.xpath(xpath).then($el => {
    cy.checkA11y($el, null, terminalLog);
  });
});

Cypress.Commands.add('checkA11yForXPathExcludeTags', (xpath: string, excludeTags: string[]) => {
  cy.xpath(xpath).then($el => {
    cy.checkA11y($el, null, (violations) => {
      // Filter out violations related to excluded tags
      const filteredResults = violations.filter((violation) => {
        // Check if any of the exclusion tags match the violation node
        return !excludeTags.some(tag => {
          // Convert the violation node to a jQuery object and check if it matches any of the excluded tags
          return Cypress.$(violation.nodes[0].target[0]).is(tag);
        });
      });

      // Log the violations using terminalLog
      terminalLog(filteredResults);

      // Assert that there are no violations left
      cy.wrap(filteredResults).should('be.empty');
    });
  });
});