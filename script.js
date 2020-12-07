const msgEl = document.getElementById("msg");


function getRandomNumber(){
    return Math.floor(Math.random() * 100 ) + 1
}
const rand_num = getRandomNumber();
console.log("number : ",rand_num)

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

let recognition = new window.SpeechRecognition();

recognition.start();

function onspeak(e){
    const msg = e.results[0][0].transcript;

    //console.log(msg);
    display_message(msg)
   // number_verify(msg)
}

function display_message(msg){
    msgEl.innerHTML =`
    <div>Your Words : </div>
    <span class="box">${msg}</span>
    `
}


recognition.addEventListener('result',onspeak); 