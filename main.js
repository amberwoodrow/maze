function MazeNavigater(startX, startY, endX, endY) {
  this.startX = startX,
  this.startY = startY,
  this.endX = endX,
  this.endY = endY,
  // this.maze = createMaze()
  this.maze = example
}

MazeNavigater.prototype.createMaze = function () {
  var grid = [];
  var row = [];

  for (var i=0; i<9; i++) {
    row = [];
    for (var j=0; j<9; j++) {
      row.push(Math.floor(Math.random() * 2));
    }
    grid.push(row);
  }
  console.log(grid);
  return grid;
};

var example =
[ [ 0, 0, 0, 0, 1, 1, 0, 1, 0 ],
  [ 0, 0, 0, 0, 1, 1, 1, 0, 1 ],
  [ 1, 1, 0, 0, 1, 0, 0, 0, 1 ],
  [ 0, 0, 1, 0, 0, 1, 1, 1, 0 ],
  [ 0, 0, 1, 0, 1, 1, 0, 1, 0 ],
  [ 0, 0, 0, 1, 0, 1, 1, 1, 1 ],
  [ 0, 1, 0, 1, 1, 1, 0, 1, 0 ],
  [ 1, 0, 0, 0, 1, 1, 1, 0, 0 ],
  [ 0, 1, 0, 0, 1, 1, 0, 1, 0 ] ];

MazeNavigater.prototype.isGridValid = function() {
  // check if beginning is a wall
  if (this.maze[this.startY][this.startX] === 1) {
    return false;
  }
  // check if end is a wall
  else if (this.maze[this.endY][this.endX] === 1) {
    return false;
  }
  return this.stepThroughGrid(this.startX, this.startY, this.endX, this.endY);
};

var stack = [];

MazeNavigater.prototype.stepThroughGrid = function() {
  stack.push([this.startX, this.startY]);
  console.log(stack);
  // check if current coordinates === end coordinates
  if (this.startY === this.endY && this.startX === this.endX) {
    return true;
  // Check up if 1 or undefined go back to prev index
} else if (this.maze[this.startY-1][this.startX] === 0) { // move up
    this.stepThroughGrid(this.startX, this.startY-1, this.endX, this.endY);

  // Check right if 1 or undefined go back to prev index
} else if (this.maze[this.startY][this.startX+1] === 0) { // move right
    this.stepThroughGrid(this.startX+1, this.startY, this.endX, this.endY);

  // Check down if 1 or undefined go back to prev index
} else if (this.maze[this.startY+1][this.startX] === 0) { // move down
    this.stepThroughGrid(this.startX, this.startY+1, this.endX, this.endY);

  // Check left if 1 or undefined go back to prev index
} else if (this.maze[this.startY][this.startX-1] === 0) { // move left
    this.stepThroughGrid(this.startX-1, this.startY, this.endX, this.endY);

  } else {
    return false;
  }
};

// enter of starting coordinates and ending coordinates
var maze1 = new MazeNavigater(8, 8, 7, 7);
var maze2 = new MazeNavigater(1, 2, 7, 7);
console.log(maze1.isGridValid());


// if we've already visited the coordinates
// if (this.startY-1 === stack[stack.length-1][this.startY-1] && this.startX === stack[stack.length-1][this.startX]) {
//
// }
