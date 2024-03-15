const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({

  "viewportWidth": 1920,
  "viewportHeight": 1080,
  "defaultCommandTimeout": 60000,
  "video": false,
  chromeWebSecurity: false,
  env: {
    environment: "devPub",
    PERCY_TOKEN:'web_391c1d4e27bc8365c92382b6330245868a518329089922d614dac6e97b8a1edb'
  },

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportPageTitle: 'Execution Report',
    reportFilename: "[status]_[datetime]-[name]-report",
    output: 'reports/mochawesome-report.json',
    reportDir: 'cypress/reports',
    screenshotsFolder: 'reports/screenshots',
    timestamp: "longDate",
    overwrite: false,
    charts: true,
    html: true,
    json:true,
    trashAssetsBeforeRuns: true
  },

  e2e: {
    setupNodeEvents(on, config) {
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });

      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });
    require('cypress-mochawesome-reporter/plugin')(on)
    return require('./cypress/plugins/index.ts')(on, config)
     
    },
    specPattern:'cypress/e2e/**/*.feature',
  },
});
