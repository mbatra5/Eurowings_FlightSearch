//let noapplitools = Cypress.env('noapplitools')
/**
 * @method takeScreenshotWithHook
 * can be used for a custom script hook
 * @param {screenShotName, scriptHook}
 */
/*Cypress.Commands.add('takeScreenshotWithHook',(screenShotName, scriptHook) => {
  if (noapplitools === 'True' || noapplitools === true) { cy.wait(500); return undefined }
  cy.document().then((doc) => {
    const height = doc.body.scrollHeight;
    for (let i = 0; i <= height; i += 100) {
      cy.scrollTo(0, i, {ensureScrollable: false});
        cy.wait(50);
    }
    cy.scrollTo('top',{ensureScrollable: false})
      .wait(50);
  })
  cy.eyesCheckWindow({tag: screenShotName, target: 'window', fully: true,
    scriptHooks: {beforeCaptureScreenshot:scriptHook}})
})

/**
 * @method takeScreenshot
 * Set false in case of no scrolling is required
 * @param {screenShotName, isScroll=true}
 */
Cypress.Commands.add('takeScreenshot', (screenShotName) => {
 // if (noapplitools === 'True' || noapplitools === true) { cy.wait(500); return undefined }
  cy.document().then((doc) => {
    const height = doc.body.scrollHeight;
    for (let i = 0; i <= height; i += 100) {
      cy.scrollTo(0, i, {ensureScrollable: false});
        cy.wait(50);
    }
    cy.scrollTo('top',{ensureScrollable: false})
      .wait(50);
  })
  cy.percySnapshot(screenShotName)
})

/**
 * @method takeSnapshot
 * take screenshot for the visible region
 */
/*Cypress.Commands.add('takeSnapshot', (screenShotName) => {
  if (noapplitools === 'True' || noapplitools === true) { cy.wait(500); return undefined }
  cy.eyesCheckWindow({tag: screenShotName, target: 'window', fully: false })
})

/**
 * @method takeScreenshotWithIgnoreRegions
 * take screenshot for the visible region
 * With array of ignore regions
 */
 /*/*Cypress.Commands.add('takeScreenshotWithIgnoreRegions', (screenShotName, regions) => {
  if (noapplitools === 'True' || noapplitools === true) { cy.wait(500); return undefined }
  let regionArray: any = [];
  regions.forEach((value: string) => {
    regionArray.push({selector: value})
  })
  cy.document().then((doc) => {
    const height = doc.body.scrollHeight;
    for (let i = 0; i <= height; i += 100) {
      cy.scrollTo(0, i, {ensureScrollable: false});
        cy.wait(50);
    }
    cy.scrollTo('top',{ensureScrollable: false})
      .wait(50);
  })
  cy.eyesCheckWindow({
    ignore: regionArray,
    tag: screenShotName, 
    target: 'window', 
    fully: true 
  })
})

/**
 * @method takeScreenshotForRegion
 * Use this command for a particular region screenshot
 * @param {screenShotName, selectorName}
 */
/*Cypress.Commands.add('takeScreenshotForRegion',(screenShotName, selectorName) => {
  if (noapplitools === 'True' || noapplitools === true) { cy.wait(500); return undefined }
  cy.document().then((doc) => {
    const height = doc.body.scrollHeight;
    for (let i = 0; i <= height; i += 100) {
      cy.scrollTo(0, i, {ensureScrollable: false});
        cy.wait(50);
    }
    cy.scrollTo('top',{ensureScrollable: false})
      .wait(50);
  })
  cy.eyesCheckWindow({tag: screenShotName, target: 'region', selector: selectorName, fully: true})
})

/**
 * @method takeScreenshotForRegionWithHook
 * Use this command for a particular region screenshot with hook
 * @param {screenShotName, selectorName, scriptHook}
 */
 /*Cypress.Commands.add('takeScreenshotForRegionWithHook',(screenShotName, selectorName, scriptHook) => {
  if (noapplitools === 'True' || noapplitools === true) { cy.wait(500); return undefined }
  cy.document().then(doc => {
    const height = doc.body.scrollHeight
    for (let i = 0; i <= height; i += 100) {
      cy.scrollTo(0, i, {ensureScrollable: false})
        cy.wait(50)
    }
    cy.scrollTo('top',{ensureScrollable: false})
      .wait(50);
  })
  cy.eyesCheckWindow({
    tag: screenShotName,
    target: 'region',
    selector: selectorName,
    fully: true,
    scriptHooks: {
      beforeCaptureScreenshot: scriptHook,
    },
  })
}) */
