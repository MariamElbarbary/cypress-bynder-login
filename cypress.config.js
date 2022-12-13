const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    fixturesFolder: 'cypress/fixtures',
    screenshotsFolder: 'cypress/screenshots',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://wave-trial.getbynder.com/',
    supportFile: "cypress/support/e2e.js",
    video:false
    env: {
      username: "mariam.elbarbary@rabobank.nl",
      password: "Wa7shteny@11"
    }
  },
});
