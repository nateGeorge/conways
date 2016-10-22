const expect = require('chai').expect
const createsGame = require('./conway.js')

describe('The game of life', () => {
  it('creates the game', function () {
    const game = createsGame(6,6)
    expect(game).to.not.equal(null)
    expect(game).to.not.equal(undefined)
    expect(typeof game).to.equal('object')
  })
  it('creates game and checks rows', () => {
    const game = createsGame(6,6)
    expect(game.length).to.equal(6)
  })

  it('creates game and checks columns', () => {
    const game = createsGame(6,6)
    expect(game[1].length).to.equal(6)
  })
});
