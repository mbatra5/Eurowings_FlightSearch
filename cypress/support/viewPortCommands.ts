Cypress.Commands.add('setViewport', deviceType => {
    switch (deviceType) {
      case 'iPhone':
        cy.viewport(430, 960);
        break;
      case 'tablet':
        cy.viewport(768, 1024);
        break;
      case 'desktop':
        cy.viewport(1920, 1080);
        break;
      default:
        cy.viewport(1280, 720);
        break;
    }
  });