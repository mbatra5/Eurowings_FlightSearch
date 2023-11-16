import {defineConfig} from 'cypress'
import eyesPlugin from '@applitools/eyes-cypress'  

export default eyesPlugin(defineConfig({

  "viewportWidth": 1920,
  "viewportHeight": 1080,
  "defaultCommandTimeout": 60000,
  "video": true,
  chromeWebSecurity: false,
  env: {
    environment: "devPub",
  },

  reporter: 'mochawesome',
  reporterOptions: {
    reportPageTitle: 'Execution Report',
    charts: true,
    json:true,
    "overwrite": false,
    html: false
  },

  e2e: {
    setupNodeEvents(on, config) {
    require('cypress-mochawesome-reporter/plugin')(on)
    return require('./cypress/plugins/index.ts')(on, config)
     
    },
    specPattern:'cypress/e2e/**/*.feature',
  },
}));
