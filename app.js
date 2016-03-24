console.log('it is a working thing!');

var playerData = {
  name: 'Allie',
  icon: 'img',
  position: 0,
  last_roll: null
};

var player2Data = {
  name: 'player two',
  icon: 'img',
  position2: 0,
  last_roll2: null
};


$('#roll').on('click', function(event){
  console.log('clicked on roll');
  rollDice();
});

function randomNumber() {
  return Math.floor(Math.random() * 2) + 1;
}


counter = 0;
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
  counter++;

  if (counter%2 === 0) {
      player2Data.position2 += diceTotal;
      console.log('blah');
    } else {
      playerData.position += diceTotal;
    }


  // target #player, change it's position
  // to whichever square equals the player1 position



  var player = $('#player');
  var index = playerData.position - 1;
  // $squares = $('.squares');
  var $squares = $('.squares');

  // if greater than the amount you can move
  if ( $squares.length > index ) {
    $squares = $squares.eq( index );
    $squares.append(player);
  } else {
    console.log("you can't move any further");
  }
}

  var player2 = $('#player2');
  var p2Index = player2Data.position - 1;
  $squares = $('.squares');
  // if greater than the amount you can move
  if ( $squares.length > p2Index ) {
    $square = $squares.eq( p2Index );
    console.log('it works!');
    $square.append(player2);
  } else {
    console.log("you can't move any further");
}


$('#start').on('click', function() {
  playerData.name = window.prompt('First Player Enter Name');
  $('#player').text(playerData.name);
});

$('#start2').on('click', function() {
  player2Data.name = window.prompt('Second Player Enter Name');
  $('#player2').text(player2Data.name);
});
// for player one's dicetotal, move player to square ___
// correspond squares to number rolled from dice








