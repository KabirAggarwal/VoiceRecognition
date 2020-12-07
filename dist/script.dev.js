"use strict";

var msgEl = document.getElementById("msg");

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

var rand_num = getRandomNumber();
console.log("number : ", rand_num);
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new window.SpeechRecognition();
recognition.start();

function onspeak(e) {
  var msg = e.results[0][0].transcript; //console.log(msg);

  display_message(msg); // number_verify(msg)
}

function display_message(msg) {
  msgEl.innerHTML = "\n    <div>Your Words : </div>\n    <span class=\"box\">".concat(msg, "</span>\n    ");
}

recognition.addEventListener('result', onspeak);