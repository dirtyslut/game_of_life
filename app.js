console.log('it works i guess');


function rollDice(){
  var die1 = document.getElementById('die1');
  var die2 = document.getElementById('die2');
  var status = document.getElementById('status');
  var d1 = Math.floor(Math.random() * 6) + 1;
  var d2 = Math.floor(Math.random() * 6) + 1;
  var diceTotal = d1 + d2;
  die1.innerHTML = d1;
  die2.innerHTML = d2;
  status.innerHTML = "You rolled "+diceTotal+".";
  if(d1 === d2 ){
    status.innerHTML += " DOUBLES! You get a FREE TURN!";
  }
}

$(document).ready(function(){
    $("marker1").click(function(){
        $("div").animate({
            left: '250px',
            height: '+=150px',
            width: '+=150px'
        });
    });
});


