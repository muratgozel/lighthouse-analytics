const {LighthouseAnalytics} = require('../../dist/lighthouse-analytics.cjs.js')

describe('lighthouse object.', function() {
  const lighthouse = new LighthouseAnalytics()
  it('has window and document.', function() {
    expect(true).toBe(true)
    expect(lighthouse.window).toBeTruthy()
  })
})
