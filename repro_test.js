const assert = require('assert/strict')

Feature('Repro')

Scenario('Reproduce issue', async ({ I }) => {
  I.amOnPage('https://example.com')
  
  session('user1', async () => {
    I.amOnPage('https://www.google.com')
    const sessionScreen = await I.executeScript(() => {
      return { width: window.screen.width, height: window.screen.height };
    })
    console.log(`sessionScreen is ${JSON.stringify(sessionScreen)}`)

    // iPhone 6 is 375x667
    assert(sessionScreen.width === 375)
    assert(sessionScreen.height === 667)
  })

})
