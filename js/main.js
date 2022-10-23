// Important Dom Elements
const tv = document.querySelector('#tv');
const tvStatic = document.querySelector('#tvStatic');
const tvScreen = document.querySelector('#tvScreen');

// Cartoon Library
const cartoonList = [
    'cartoons/TomAndJerry1.mp4',
    'cartoons/CowAndChicken1.mp4',
    'cartoons/TomAndJerry2.mp4',
    'cartoons/CowAndChicken2.mp4'
];

// global variables
let episodeIndex = 0;
let isOn = false;

// Event listeners
document.querySelector('#powerBtn').addEventListener('click', togglePower);
document.querySelector('#chanUpBtn').addEventListener('click', nextChannel);
document.querySelector('#chanDownBtn').addEventListener('click', prevChannel);
document.querySelector('#muteBtn').addEventListener('click' , toggleMute);
document.querySelector('#volUpBtn').addEventListener('click', volumeUp);
document.querySelector('#volDownBtn').addEventListener('click', volumeDown);

function togglePower() {
    isOn = (isOn) ? false : true;
    tvPower(isOn);
}

function toggleMute() {
    if (tvScreen.muted === false){
        tvScreen.muted = true;
    }else {
        tvScreen.muted = false;
    }
    
    
   
}



function volumeUp () {
    if(tvScreen.volume !== 1) {
        tvScreen.volume = tvScreen.volume + 0.1;
    }
}
function volumeDown () {
    if(tvScreen.volume > 0.01 ) {
        tvScreen.volume = tvScreen.volume - 0.1;
    }
}
function nextChannel() {
    if (isOn) {
        clearScreen()
        clearVideo()
        episodeIndex = (episodeIndex === cartoonList.length - 1) ? 0 : episodeIndex + 1;
        tvScreen.innerHTML = `<source src='${cartoonList[episodeIndex]}'>`
        tvScreen.play(); 
    }
}

function prevChannel() {
    if (isOn) {
        clearScreen()
        clearVideo()
        episodeIndex = (episodeIndex === 0 ) ? cartoonList.length - 1 : episodeIndex - 1;
        tvScreen.innerHTML = `<source src='${cartoonList[episodeIndex]}'>`
        tvScreen.play();
        
    }
}


function clearScreen(){
    tv.className = '';
}

function clearVideo() {
    tvScreen.pause();
    tvScreen.innerHTML = '';
    tvScreen.load();
    
}

function tvPower(isOn) {
    clearScreen();
    clearVideo();
    if (isOn) {
        tv.classList.add('background-static');
    } else {
        tv.classList.add('background-off');
    }
}