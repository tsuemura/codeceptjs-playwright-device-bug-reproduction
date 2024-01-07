const { setHeadlessWhen, setCommonPlugins } = require("@codeceptjs/configure");
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

const { devices } = require("playwright");

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    webdriver: {
      browser: "chrome",
      url: "http://localhost",
      show: true,
      emulate: devices["iPhone 6"],
      desiredCapabilities: {
        chromeOptions: {
          "mobileEmulation": { "deviceName": "iPhone 6" }
        },
      },
    },
  },
  include: {
    I: "./steps_file.js",
  },
  name: "codeceptjs-playwright-device-bug-reproduction",
};