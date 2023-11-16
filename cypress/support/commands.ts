// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      isWithinViewport(selector: any): Chainable<Element>
      matchWidth(arg1: any, arg2: any): void
      eyesSetup(testName: string, execution_type:string): Chainable<Element>
      eyesDestroy(): void
      takeScreenshotWithHook(screenShotName: string, scriptHook:any): Chainable<Element>
      takeScreenshot(screenShotName: string): Chainable<Element>
      takeScreenshotWithIgnoreRegions(screenShotName: string, regions: any): void
      takeSnapshot(screenShotName: string): Chainable<Element>
      takeScreenshotForRegion(screenShotName: string, selectorName:string): Chainable<Element>
      takeScreenshotForRegionWithHook(screenShotName: string, selectorName:string, scriptHook: any): Chainable<Element>
      isVisible(selector: string): Chainable<Element>
      isNotVisible(selector: string): Chainable<Element>
      attributeIsPresent(selector: any, attributeName: string, attributeValue: string): Chainable<Element>
      attributeIsAbsent(selector: any, attributeName: string): Chainable<Element>
      validateLength(selector: string, value: number): Chainable<Element>
      scrollToTop(selector: string): Chainable<Element>
      scrollToBottom(selector: string): Chainable<Element>
      scrollToElement(selector: string): Chainable<Element>
      doesNotExist(selector: string): Chainable<Element>
      setCustomHref(selector: any, valu: string): Chainable<Element>
      verifyDownload(selector: string): Chainable<Element>
      checkRedirection(pathname: string): void
      isChecked(selector: string): Chainable<Element>
      isNotChecked(selector: string): Chainable<Element>
      checkHref(selector: string, hrefValue: string): Chainable<Element>
      hrefContains(selector: string, hrefText: string): Chainable<Element>
      hrefNotPresent(selector: string): Chainable<Element>
      shouldIncludeText(selector:string, expectedText: string): Chainable<Element>
      shouldHaveText(selector:string, expectedText: string): Chainable<Element>
      getIframe(iFrameselector:string,iframeElement:string): Chainable<Element>
      iFrameisVisible(iFrameselector:string): Chainable<Element>
      iframeElementhasText(iFrameselector:string,iframeElement:string, expectedText:string): Chainable<Element>
      iFrameattributeIsPresent(iFrameselector: string, iframeElement: string,attributeName:string, attributeValue: string): Chainable<Element>
      setViewport(deviceType:string):void
    }

    interface JQuery {
      fixtures(...any: any): any
    }
  }
}

export {}