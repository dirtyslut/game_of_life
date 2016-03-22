console.log('it is a working thing!');

var playerData = {
  name: 'Allie',
  icon: 'img',
  position: 0,
  last_roll: null
};

function randomNumber() {
  return Math.floor(Math.random() * 2) + 1;
}

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
  $status.text(message);
  // target #player, change it's position
  // to whichever square equals the player1 position
  playerData.position += diceTotal;

  var player = $('#player');
  var index = playerData.position - 1;
  $squares = $('.squares');
  // if greater than the amount you can move
  if ( $squares.length > index ) {
    $square = $squares.eq( index );

    if ($square.data().goBackward) {
      console.log('go backward');
    }
    $square.append(player);
  } else {
    console.log("you can't move any further");
  }
}

$('#start').on('click', function() {
  playerData.name = window.prompt('Enter Name');
  $('#player').text(playerData.name);
});
// for player one's dicetotal, move player to square ___
// correspond squares to number rolled from dice


// player placement
// icon
// player name
// player last roll

$('#roll').on('click', function(event){
  console.log('clicked on roll');
  rollDice();
});


