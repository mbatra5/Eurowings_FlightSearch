import ReturnBrowsers from './browsers'
import BatchSetup from './eyesBatchSetup'
import AppName from './eyesAppName'
let noapplitools = Cypress.env('noapplitools')

Cypress.Commands.add('eyesSetup', (testName, executionType) => {
  if( executionType === 'devices' || executionType === 'iphone' || executionType === 'pixel' || executionType === 'iphone11' || executionType === 'ipad' ) {
    cy.viewport('iphone-x')
  }
  if (noapplitools === 'True' || noapplitools === true) { return undefined }
  let browserList = new ReturnBrowsers(),
    appName = AppName.setInfo(testName, executionType),
    eyeObj = BatchSetup.setBatchInfo(testName, appName);

  if(executionType === 'desktop'){
    eyeObj['browser'] = browserList.getDesktopBrowsers()
  } else if(executionType === 'devices'){
    eyeObj['browser'] = browserList.getDeviceBrowsers()
  } else if(executionType === 'all'){
    eyeObj['browser'] = browserList.getAllBrowsers()
  } else if(executionType === 'chrome'){
    eyeObj['browser'] = browserList.getChrome()
  } else if(executionType === 'firefox'){
    eyeObj['browser'] = browserList.getFirefox()
  } else if(executionType === 'iphone'){
    eyeObj['browser'] = browserList.getIphone()
  } else if(executionType === 'pixel'){
    eyeObj['browser'] = browserList.getPixel()
  } else if(executionType === 'iphone11'){
    eyeObj['browser'] = browserList.getIphone11()
  } else if(executionType === 'ipad'){
    eyeObj['browser'] = browserList.getIpad()
  }
  cy.eyesOpen(eyeObj)
})

Cypress.Commands.add('eyesDestroy', () => {
  if (noapplitools === 'True' || noapplitools === true) { return undefined }
  cy.eyesClose()
})
