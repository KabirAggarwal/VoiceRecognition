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
    number_verify(msg)
}

function display_message(msg){
    msgEl.innerHTML =`
    <div>Your Words : </div>
    <span class="box">${msg}</span>
    `
}

function number_verify(msg){
    const num = +msg;
    if(Number.isNaN(num)){
        msgEl.innerHTML += `<div>Not a valid number added</div>`
        return;
    }
    if(num > 100 || num < 1){
        msgEl.innerHTML= `Number should be between (1 to 100)`
        return;
    }
    if( num === rand_num){
        document.body.innerHTML =`
        <h2>Yippee!!! Correct number guessed .. <br><br>
        Number was : ${msg} </h2>
        <button class="play-again" id="play again">Play Again</button>

        `
    }
    else if (num >rand_num){
        msgEl.innerHTML +=`<div>Go Lower</div>`
    }
    else{
        msgEl.innerHTML +=`<div>Go Higher</div>`
    }
}


recognition.addEventListener('result',onspeak); 

recognition.addEventListener('end',()=> recognition.start())

document.body.addEventListener('click', e  => {
    if(e.target.id == 'play-again'){
        window.location.reload();
    }
})