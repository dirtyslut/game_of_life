console.log('it is a working thing!');


$('#start').on('click', function() {
   playerData.name = window.prompt('First Player Enter Name');
   $('#player').text(playerData.name);
  });

$('#start2').on('click', function() {
  player2Data.name = window.prompt('Second Player Enter Name');
  $('#player2').text(player2Data.name);
  });

var gameStart = false;

$('#startGame').on('click', function() {
  if (!gameStart) {
  console.log(playerData.position);
  playerData.position = 1;
  player2Data.position = 1;
  $('#square1').append(playerData.piece);
  $('#square1').append(player2Data.piece);
  gameStart = true;
  }

});

var playerData = {
  name: 'Allie',
  icon: 'img',
  position: 1,
  last_roll: null,
  piece: $('#player')
};

var player2Data = {
  name: 'player two',
  icon: 'img',
  position: 1,
  last_roll: null,
  piece: $('#player2')
};


var trap = [5, 10, 17, 28, 33, 49];

var player = $('#player');
var $squares = $('.squares');
var player2 = $('#player2');
var $squares = $('.squares');

// if greater than the amount you can move


$('#roll').on('click', function(event){
  console.log('clicked on roll');
  rollDice();
});

function randomNumber() {
  return Math.floor(Math.random() * 3) + 1;
}


var counter = 1;

var move = function(player, diceTotal) {
  var index = player.position - 1;
  console.log('working');
  // console.log($squares, index);
  if ( $squares.length > index ) {
    player.position += diceTotal;
    index = player.position - 1;
    $square = $squares.eq( index );
    $square.append(player.piece);
  } else {
    console.log("you can't move any further");
  }
  counter++;
};


function rollDice(){
  console.log(counter);
  var $die1 = $('#die1');
  var $die2 = $('#die2');
  var $status = $('#status');
  var d1 = randomNumber();
  var d2 = randomNumber();
  // making diceTotal global so we can reference it in other functions
  diceTotal = d1 + d2;
  $die1.text(d1);
  $die2.text(d2);
  var message = "You rolled " + diceTotal + ".";
  if (counter%2 === 0) {
    if(d1 === d2 ) {
    console.log(d1 + d2);
    message += " ";
    counter = 0;
    console.log(counter);
  }
    move(playerData, diceTotal);
    checkTrap();
  } else {
    move(player2Data, diceTotal);
    checkTrap();
  }
  $status.text(message);
}

var checkTrap = function () {
  console.log('checking trap');
  console.log('player1trap?='+playerData.position);
  console.log('player2trap?='+player2Data.position);
  for (i= 0; i<trap.length; i++) {
    if (playerData.position ==  trap[i]) {
      alert('go back 2 spaces');
      move(playerData, -2);
    }
    if (player2Data.position == trap[i]) {
      alert('go back 2 spaces');
      move(player2Data, -2);
    }
  }
};



  // target #player, change it's position
  // to whichever square equals the player1 position


// for player one's dicetotal, move player to square ___
// correspond squares to number rolled from dice








