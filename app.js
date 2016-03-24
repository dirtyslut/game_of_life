console.log('it is a working thing!');

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

var player = $('#player');
var $squares = $('.squares');
var player2 = $('#player2');
var $squares = $('.squares');

// if greater than the amount you can move


$('#start').on('click', function() {
   playerData.name = window.prompt('First Player Enter Name');
   $('#player').text(playerData.name);
  });

$('#start2').on('click', function() {
  player2Data.name = window.prompt('Second Player Enter Name');
  $('#player2').text(player2Data.name);
  });


$('#roll').on('click', function(event){
  console.log('clicked on roll');
  rollDice();
});

function randomNumber() {
  return Math.floor(Math.random() * 2) + 1;
}

var counter = 0;

var move = function(player, diceTotal) {
  var index = player.position - 1;
  console.log('working');
  console.log($squares, index);
  if ( $squares.length > index ) {
    $square = $squares.eq( index );
    $square.append(player.piece);
    player.position += diceTotal;
  } else {
    console.log("you can't move any further");
  }
  counter++;
};

function rollDice(){
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
  if(d1 === d2 ){
    message += " DOUBLES! You get a FREE TURN!";
  }
  if (counter%2 === 0) {
    move(player2Data, diceTotal);
  } else {
    move(playerData, diceTotal);
  }
  $status.text(message);
}


  // target #player, change it's position
  // to whichever square equals the player1 position


// for player one's dicetotal, move player to square ___
// correspond squares to number rolled from dice








