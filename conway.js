function createsGame (row, col) {
  var board = new Array
  board = makeRows(board, row, col)
  return board
}

function makeRows(board, row, col) {
  for(var i = 0; i<row; i++){
    var arow = makeCols(col)
    board.push(arow)
  }
  return board
}

function makeCols(col) {
  arow = new Array
  for(var i = 0; i<col; i++){
    arow.push(Math.round(Math.random()))
  }
  return arow
}

createsGame(6)

module.exports = createsGame
