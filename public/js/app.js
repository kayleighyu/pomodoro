//Data and variable declarations
var timer;
var minutesLeft = 25;
var secondsLeft = 10;
var isOnBreak = false;
var numberOfBreaks = 0;
//Getting references to the DOM
var minutes = document.querySelector('#minutes');
var seconds = document.querySelector('#seconds');
var startButton = document.querySelector('#start');
//Initialization code
  //EventListeners
  startButton.addEventListener('click', start);
  render();
//function definitions
function start(){
  if(!timer){
    timer = setInterval(tick, 1000);
  }
}
function tick(){
  decrementMinutes();
  decrementSeconds();
  render();
}
function decrementMinutes(){
  if (secondsLeft === 0){
    minutesLeft -= 1;
  }
}
function decrementSeconds(){
  if (secondsLeft === 0){
    secondsLeft = 59;
  } else {
    secondsLeft -= 1;
  }
}
function pad(num){
  if(num < 10){
    return `0${num}`;
  } else {
    return num;
  }
}
function render(){
  minutes.textContent = pad(minutesLeft);
  seconds.textContent = pad(secondsLeft);
}
