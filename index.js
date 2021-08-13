var random1 = Math.floor(Math.random()*6) + 1;
var randomImageSource1 = "images/dice" + random1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);


var random2 = Math.floor(Math.random()*6) + 1;
var randomImageSource2 = "images/dice" + random2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if (random1 > random2)
  document.querySelector("h1").innerHTML = "Player 1 Wins! \u{1F451}";
  else if (random2 > random1)
    document.querySelector("h1").innerHTML = "Player 2 Wins! \u{1F451}";
  else
    document.querySelector("h1").innerHTML = "Draw! \u{1F451}";
