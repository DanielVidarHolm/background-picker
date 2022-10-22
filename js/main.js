
const tv = document.querySelector('#tv');
const tvStatic = document.querySelector('#tvStatic');
const tvScreen = document.querySelector('#tvScreen');

const cartoonList = [
    'cartoons/TomAndJerry1.mp4',
    'cartoons/CowAndChicken1.mp4',
    'cartoons/TomAndJerry2.mp4',
    'cartoons/CowAndChicken2.mp4'
];

let episodeIndex = 0;
let isOn = false;

document.querySelector('#powerBtn').addEventListener('click', togglePower);
document.querySelector('#chanUpBtn').addEventListener('click', nextChannel);

function togglePower() {
    isOn = (isOn) ? false : true;
    tvPower(isOn);
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
function clearScreen(){
    tv.className = '';
}
function clearVideo() {
    tvScreen.pause();
    tvScreen.innerHTML = '';
    tvScreen.load();
    
}
function getRandomInt() {
    return math.floor
}
function nextChannel() {
    if (isOn) {
        clearScreen()
        clearVideo()
        tvScreen.innerHTML = `<source src='${cartoonList[episodeIndex]}'>`
        tvScreen.play();
        episodeIndex = (episodeIndex === 3) ? 0 : episodeIndex + 1;
    }
}