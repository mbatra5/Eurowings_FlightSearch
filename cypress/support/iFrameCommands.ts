///<reference types ="cypress-iframe" />
Cypress.Commands.add('iFrameisVisible', iFrameselector => { 
  //locating iframe loads and is visible
   cy.get(iFrameselector).its('0.contentDocument.body').should('be.visible')
  })

  Cypress.Commands.add('getIframe', (iFrameselector,iframeElement) => { 
    return cy.get(iFrameselector).its('0.contentDocument.body').then(cy.wrap)
     .find(iframeElement)
    })

    Cypress.Commands.add('iframeElementhasText',(iFrameselector,iframeElement,expectedText)=>{      
     return cy.getIframe(iFrameselector,iframeElement).should('have.text',expectedText)
    })

    Cypress.Commands.add('iFrameattributeIsPresent', (iFrameselector,iframeElement,attributeName, attributeValue) => { 
      return cy.get(iFrameselector).its('0.contentDocument.body').then(cy.wrap)
     .find(iframeElement).invoke('attr', attributeName).should('eq', attributeValue)
    })
 
 