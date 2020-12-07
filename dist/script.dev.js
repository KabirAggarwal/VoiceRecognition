"use strict";

var msgEl = document.getElementById("msg"); //Get Random number

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

var rand_num = getRandomNumber();
console.log("number : ", rand_num); //use of recoginition services

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new window.SpeechRecognition(); //method to start voice recog...

recognition.start(); // taking the words of the user

function onspeak(e) {
  var msg = e.results[0][0].transcript;
  display_message(msg);
  number_verify(msg);
} //Msg display


function display_message(msg) {
  msgEl.innerHTML = "\n    <div>Your Words : </div>\n    <span class=\"box\">".concat(msg, "</span>\n    ");
} //The main code and verifying the user input


function number_verify(msg) {
  var num = +msg;

  if (Number.isNaN(num)) {
    msgEl.innerHTML += "<div>Not a valid number added</div>";
    return;
  }

  if (num > 100 || num < 1) {
    msgEl.innerHTML = "Number should be between (1 to 100)";
    return;
  }

  if (num === rand_num) {
    document.body.innerHTML = "\n        <h2>Yippee!!! Correct number guessed .. <br><br>\n        Number was : ".concat(num, " </h2>\n        <button class=\"play-again\" id=\"play-again\">Play Again</button>");
  } else if (num > rand_num) {
    msgEl.innerHTML += "<div>Go Lower</div>";
  } else {
    msgEl.innerHTML += "<div>Go Higher</div>";
  }
} //capturing the result


recognition.addEventListener('result', onspeak); //recalling the function uptill correct answer

recognition.addEventListener('end', function () {
  return recognition.start();
}); //For playing again the game

document.body.addEventListener('click', function (e) {
  if (e.target.id == 'play-again') {
    window.location.reload();
  }
});