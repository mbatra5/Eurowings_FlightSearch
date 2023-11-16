import GenerateUUID from './config'

let batchName:string = Cypress.env('batchName'),
    eyeObj = { batchName };

class BatchSetup {
  static setBatchInfo (testName: string, appName: string) {
    eyeObj['appName'] = appName
    if ( batchName == 'Local' ) {
      eyeObj.batchName = batchName+'_'+testName;
    } else if ( batchName == 'Custom' ) {
      eyeObj['batchId'] = GenerateUUID.getV4()
      eyeObj.batchName = batchName+'_'+testName;
    }
    return eyeObj;
  }
}

export default BatchSetup