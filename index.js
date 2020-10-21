var randomNumber1 = Math.floor(Math.random() * 6) + 1; //Generate number between 1-6 for image1
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //Generate number between 1-6 for image2

var randomDiceImage1 = "dice" + randomNumber1 + ".png"; //Generate image from dice 1-6 for image1
var randomDiceImage2 = "dice" + randomNumber2 + ".png"; //Generate image from dice 1-6 for image2


var randomImage1 = "images/" + randomDiceImage1;  //Generate path of image file of dice 1-6 for image 1
var randomImage2 = "images/" + randomDiceImage2;  //Generate path of image file of dice 1-6 for image 2

var image1 = document.querySelectorAll("img")[0];  //seting attribute for image 1
image1.setAttribute("src", randomImage1);

var image2 = document.querySelectorAll("img")[1];  //seting attribute for image 2
image2.setAttribute("src", randomImage2);

// changing heading according to who wins start

// Player1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = ("⛳Player 1 Wins!");
}
// if game draws
else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = ("Draw!");
}

//if player2 wins
else {
  document.querySelector("h1").innerHTML = ("Player 2 Wins! ⛳");
}
// changing heading according to who wins ends
