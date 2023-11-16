

Cypress.Commands.add('isVisible',selector => { 
    return cy.get(selector).should('be.visible')
  })
  
  Cypress.Commands.add('scrollToElement',selector => { 
   return cy.get(selector).scrollIntoView({easing: 'linear'})

  })

  Cypress.Commands.add('isNotVisible',selector => { 
    return cy.get(selector).should('not.be.visible')
  })
  
  Cypress.Commands.add('validateLength', (selector, value) => { 
    return cy.get(selector).should('have.length', value)
  })
  
  Cypress.Commands.add('attributeIsPresent', (selector, attributeName, attributeValue) => { 
    return cy.get(selector).invoke('attr', attributeName).should('eq', attributeValue)
  })
  
  Cypress.Commands.add('attributeIsAbsent', (selector, attributeName) => { 
    return cy.get(selector).invoke('attr', attributeName).should('not.exist')
  })
  
  Cypress.Commands.add('scrollToTop', selector => { 
    return cy.get(selector).scrollTo('top', {ensureScrollable:false})
  })
  
  Cypress.Commands.add('scrollToBottom', selector => { 
    return cy.get(selector).scrollTo('bottom')
  })
  
  Cypress.Commands.add('doesNotExist', selector => {
    return cy.get(selector).should('not.exist')
  })
  
  Cypress.Commands.add('setCustomHref', (selector, value) => { 
    return cy.get(selector).invoke('attr', 'href', value)
  })
  
  Cypress.Commands.add('checkRedirection', pathname => { 
    cy.url().should('include',  pathname)
  })
  
  Cypress.Commands.add('isChecked', selector => { 
    return cy.get(selector).should('be.checked')
  })
  
  Cypress.Commands.add('isNotChecked', selector => { 
    return cy.get(selector).should('not.be.checked')
  })
  
  Cypress.Commands.add('checkHref', (selector, hrefValue) => { 
    return cy.get(selector)
      .invoke('attr', 'href')
      .should('eq', hrefValue)
  })
  
  Cypress.Commands.add('hrefContains', (selector, hrefText) => { 
    return cy.get(selector)
      .invoke('attr', 'href')
      .should('include', hrefText)
  })
  
  Cypress.Commands.add('hrefNotPresent', (selector) => { 
    return cy.get(selector).should("not.have.attr", "href", '#undefined');
  })

  Cypress.Commands.add('shouldIncludeText',(selector,expectedText) => {
    return cy.get(selector).should("include.text", expectedText , {timeout: 10000})
  })
  Cypress.Commands.add("shouldHaveText", (selector,expectedText) => {
    return cy.get(selector).should("have.text", expectedText, {timeout: 10000});
  });



