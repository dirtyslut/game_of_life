console.log('it works i guess');

var player1 = {
  name: 'Allie',
  icon: 'img',
  position: 0,
  last_roll: null
};

function randomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function rollDice(){
  var die1 = document.getElementById('die1'); // jquery selecting
  var die2 = document.getElementById('die2'); // regular dom
  var status = document.getElementById('status');
  var d1 = randomNumber();
  var d2 = randomNumber();
  // making diceTotal global so we can reference it in other functions
  diceTotal = d1 + d2;
  die1.innerHTML = d1;
  die2.innerHTML = d2;
  status.innerHTML = "You rolled "+diceTotal+".";
  if(d1 === d2 ){
    status.innerHTML += " DOUBLES! You get a FREE TURN!";
  }
  player1.position = diceTotal;
}

// player placement
// icon
// player name
// player last roll



$(document).ready(function(){
    $("marker1").click(function(){
        $("div").animate({
            left: '250px',
            height: '+=150px',
            width: '+=150px'
        });
    });
});


