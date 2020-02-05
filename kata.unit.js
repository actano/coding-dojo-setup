const { expect } = require('chai')

const { functionUnderTest } = require('./kata')

describe('function under test', () => {
  it('should return something', () => {
    expect(functionUnderTest()).to.equal("something")
  })
})
