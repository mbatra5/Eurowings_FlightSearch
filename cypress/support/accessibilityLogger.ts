// cypress/support/accessibilityLogger.ts

export function terminalLog(violations) {
  // Log to terminal
  cy.task(
    'log',
    `${violations.length} accessibility violation${
      violations.length === 1 ? '' : 's'
    } ${violations.length === 1 ? 'was' : 'were'} detected`
  );
  
  const violationData = violations.map(
    ({ id, impact, description, nodes, tags }) => {
      // Extract WCAG guidelines from tags
      const wcagTags = tags.filter(tag => tag.startsWith('wcag'));
      return {
        id,
        impact,
        description,
        nodes: nodes.length,
        guidelines: wcagTags.join(', ') || 'N/A' // Join multiple WCAG tags or set to 'N/A' if none found
      };
    }
  );

  cy.task('table', violationData);

  // Log to browser console
  console.log(`${violations.length} accessibility violation${violations.length === 1 ? '' : 's'} ${violations.length === 1 ? 'was' : 'were'} detected`);
  console.table(violationData);

  // Attach violations to the test context for reporting
  Cypress.env('a11yViolations', violationData);
}
