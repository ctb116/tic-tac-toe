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


var Board = function() {
  this.spaces = [];
  //this.spaces =
  //[ space00 object, space01 object, space02 object ]
  //[ space10 object, space11 object, space12 object ]
  //[ space20 object, space21 object, space22 object]

}

Board.prototype.findWinner = function() {
  var horizontalWinner = this.horizontalWinner();
  var verticalWinner = this.verticalWinner();
  var diagonalWinner = this.diagonalWinner();
  if (horizontalWinner !== "") {
    return horizontalWinner;
  }
  else if (verticalWinner !== "") {
    return verticalWinner;
  }
  else if (diagonalWinner !== "") {
    return diagonalWinner;
  }
  else {
    return "";
  }
}

Board.prototype.verticalWinner = function() {
  for (var i = 0; i<3; i++) {
    //if all spaces in this ith column are marked
    if (this.spaces[0][i].marked === true && this.spaces[1][i].marked === true && this.spaces[2][i].marked === true) {
      //and all spaces in this ith column are marked by the same player
      if (this.spaces[0][i].markedBy === this.spaces[1][i].markedBy && this.spaces[1][i].markedBy === this.spaces[2][i].markedBy) {
        //return the player and end this function
        return this.spaces[0][i].markedBy;
      }
    }
  }
  //if there is no winner return this string
  return "";
}

Board.prototype.horizontalWinner = function() {
  for (var i = 0; i<3; i++) {
    // all spaces in this row are marked
    if (this.spaces[i][0].marked === true && this.spaces[i][1].marked === true && this.spaces[i][2].marked === true) {
      //and all spaces in this this row are marked by the same player
      if (this.spaces[i][0].markedBy === this.spaces[i][1].markedBy && this.spaces[i][1].markedBy === this.spaces[i][2].markedBy) {
        return this.spaces[i][0].markedBy;
      }
    }
  }
  return "";
}

Board.prototype.diagonalWinner = function() {
  if (this.space[0][0].marked === true && this.space[1][1].marked === true && this.space[2][2].marked === true) {
    if(this.spaces[0][0].markedBy === this.spaces[1][1].markedBy && this.spaces[1][1].markedBy === this.spaces[2][2].markedBy) {
      return this.spaces[0][0].markedBy;
    }
  }
  if (this.space[0][2].marked === true && this.space[1][1].marked === true && this.space[2][0].marked === true) {
    if(this.spaces[0][2].markedBy === this.spaces[1][1].markedBy && this.spaces[1][1].markedBy === this.spaces[2][0].markedBy) {
      return this.spaces[0][2].markedBy;
    }
  }
  //there is no diagonal winner
  return "";
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

  console.log(board.spaces);
  console.log(board.spaces[0]);
  console.log(board.spaces[0][0]);
});
