var Player = function(mark) {
  this.mark = mark;
}

Player.prototype.mark = function() {
  return this.mark;
}

var Space = function(xCoordinate, yCoordinate) {
  this.x = xCoordinate;
  this.y = yCoordinate;
  this.marked = false;
  this.markedBy = "";
}

var Board = function() {
  this.spaces = [];
}

Space.prototype.xCoordinate = function() {
  return this.x;
}

Space.prototype.yCoordinate = function() {
  return this.y;
}

Space.prototype.mark = function(player) {
  this.marked = true;
  this.markedBy = player.mark;
}

Space.prototype.markedBy = function() {
  return this.markedBy;
}


var playerX = new Player("X");
var playerO = new Player("O");


$(document).ready(function(){
  var board = new Board();

  for (var row = 0; row < 3; row++) {
    var currentRow = [];
    for (var col = 0; col < 3; col++){
      divId = "#space" + row + col;
      var newSpace = new Space(row, col);
      // makes a new space and sets its index with current row index and current column index
      currentRow.push(newSpace);
      // sends the new space to currentRow array.
      // push row and col to var currentRow
      $(divId).click(function() {
        console.log("clicked");
      });
      // after three iterations, currentRow array will be filled with three spaces
    }
    board.spaces.push(currentRow);
  }
  console.log(playerX.mark);
});
