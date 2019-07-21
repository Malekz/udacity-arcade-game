// Enemies our player must avoid
var Enemy = function(x, y, speed) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
  // set initial location and speed
  this.x = x;
  this.y = y;
  this.speed = speed;

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = "images/enemy-bug.png";
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x = this.x + this.speed * dt;

  // reset bugs position when hit border
  if (this.x > 600) {
    this.x = -50;
  }

  // reset player position when collide with enemy-bug
  if (
    player.x > this.x - 50 &&
    player.x < this.x + 50 &&
    player.y > this.y - 50 &&
    player.y < this.y + 50
  ) {
    player.resetPlayer();
  }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var INITIAL_PLAYER_X = 200;
var INITIAL_PLAYER_Y = 404;

var Player = function() {
  // set player initial location
  this.x = INITIAL_PLAYER_X;
  this.y = INITIAL_PLAYER_Y;

  // load player image
  this.sprite = "images/char-boy.png";
};

// alert when player reach water and reset player position
Player.prototype.update = function() {
  if (this.y <= 0) {
    alert("You won!");
    this.resetPlayer();
  }
};

// draw the player on the screen
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var LEFT_WALL = 0;
var RIGHT_WALL = 400;
var TOP_WALL = 0;
var BOTTOM_WALL = 404;
var PLAYER_HEIGHT = 101;
var PLAYER_WIDTH = 83;
