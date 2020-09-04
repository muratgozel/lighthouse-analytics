const {Lighthouse} = require('../../dist/lighthouse-analytics.cjs.js')

describe('lighthouse object.', function() {
  const lighthouse = new Lighthouse()
  it('has window and document.', function() {
    expect(true).toBe(true)
    expect(lighthouse.window).toBeTruthy()
  })
})
