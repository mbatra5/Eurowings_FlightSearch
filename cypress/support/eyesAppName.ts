class AppName {
  static setInfo (testName: string, executionType: string) {
    let temp = testName.split('_'),
      appName = temp[0];
    if( testName.indexOf('RTL') > -1 ) {
      appName = appName+'_RTL';
    }
    appName = appName+'_'+executionType;
    return appName;
  }
}

export default AppName