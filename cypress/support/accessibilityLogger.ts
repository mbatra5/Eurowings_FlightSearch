export function terminalLog(violations) {
  cy.location('href').then((fullUrl) => {
    const url = fullUrl.split('/__cypress/iframes/')[0]; // Extract the actual URL

    // Custom reporter function
    const customReporter = (results) => {
      return results.map(({ id, impact, description, nodes, tags }) => {
        const wcagTags = tags.filter(tag => tag.startsWith('wcag'));
        return {
          id,
          impact,
          description,
          nodes: nodes.length,
          guidelines: wcagTags.join(', ') || 'N/A'
        };
      });
    };

    const formattedResults = customReporter(violations);

    // Log the URL and summary to terminal
    cy.task(
      'log',
      `Accessibility violations detected on ${url}: ${formattedResults.length} violation${formattedResults.length === 1 ? '' : 's'} found`
    );

    // Log the detailed violations to terminal
    cy.task('table', formattedResults);

    // Log the URL and summary to browser console
    console.log(`Accessibility violations detected on ${url}: ${formattedResults.length} violation${formattedResults.length === 1 ? '' : 's'} found`);
    
    // Log the detailed violations to browser console
    console.table(formattedResults);
  });
}