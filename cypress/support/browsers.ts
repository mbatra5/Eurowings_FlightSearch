const desktop:any = [
  { width: 1366, height: 768, name: 'firefox' },
  { width: 1440, height: 1200, name: 'edgechromium' },
  { width: 1920, height: 1080, name: 'safari' },
  { width: 2560, height: 1480, name: 'chrome' },
  { width: 1560, height: 1200, name: 'safari' },
  {
    iosDeviceInfo: {
      deviceName: 'iPad Pro (12.9-inch) (3rd generation)',
      screenOrientation: 'portrait',
      iosVersion: 'latest',
    },
  }
]

const devices:any = [
  {
    iosDeviceInfo: {
      deviceName: 'iPhone 11',
      screenOrientation: 'portrait',
      iosVersion: 'latest-1',
    },
  },
  {
    iosDeviceInfo: {
      deviceName: 'iPad (7th generation)',
      screenOrientation: 'portrait',
      iosVersion: 'latest',
    },
  },
  {
    iosDeviceInfo: {
      deviceName: 'iPhone 12 Pro',
      screenOrientation: 'portrait',
      iosVersion: 'latest',
    },
  },
  { deviceName: 'Pixel 2', screenOrientation: 'portrait' }
]

const all:any = [
  { width: 1366, height: 768, name: 'firefox' },
  { width: 1366, height: 768, name: 'chrome' },
  { width: 1440, height: 1200, name: 'edgechromium' },
  { width: 1920, height: 1080, name: 'safari' },
  { width: 2560, height: 1480, name: 'chrome' },
  { width: 1920, height: 1200, name: 'safari' },
  {
    deviceName: 'iPad Mini',
    screenOrientation: 'landscape',
    iosVersion: 'latest',
  },
  {
    deviceName: 'iPad Pro',
    screenOrientation: 'portrait',
    iosVersion: 'latest',
  },
  { deviceName: 'Pixel 2', screenOrientation: 'portrait' },
  {
    iosDeviceInfo: {
      deviceName: 'iPad (7th generation)',
      screenOrientation: 'portrait',
      iosVersion: 'latest',
    },
  },
  {
    iosDeviceInfo: {
      deviceName: 'iPhone 12 Pro',
      screenOrientation: 'portrait',
      iosVersion: 'latest',
    },
  },
]

const chrome:any = { width: 1366, height: 768, name: 'chrome' }
const firefox:any = { width: 2560, height: 1480, name: 'firefox' }

const iphone:any = {
  iosDeviceInfo: {
    deviceName: 'iPhone 12 Pro',
    screenOrientation: 'portrait',
    iosVersion: 'latest',
  }
},
 ipad:any =  {
    iosDeviceInfo: {
      deviceName: 'iPad (7th generation)',
      screenOrientation: 'portrait',
      iosVersion: 'latest',
    },
  },
  pixel:any = { deviceName: 'Pixel 2', screenOrientation: 'portrait' },
  iphone11:any = {
    iosDeviceInfo: {
      deviceName: 'iPhone 11',
      screenOrientation: 'portrait',
      iosVersion: 'latest-1',
    },
  }

class ReturnBrowsers {
  getDesktopBrowsers() {
    return desktop
  }

  getDeviceBrowsers() {
    return devices
  }

  getAllBrowsers() {
    return all
  }

  getChrome() {
    return chrome
  }

  getFirefox() {
    return firefox
  }

  getIphone() {
    return iphone
  }

  getIphone11() {
    return iphone11
  }

  getPixel() {
    return pixel
  }

  getIpad() {
    return ipad
  }
}

export default ReturnBrowsers