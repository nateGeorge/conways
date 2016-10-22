const expect = require('chai').expect
const createsGame = require('./conway.js')

describe('The game of life', () => {
  it('creates the game', function () {
    const game = createsGame()
    expect(game).to.not.equal(null)
    expect(game).to.not.equal(undefined)
    expect(typeof game).to.equal('object')
  })
});
