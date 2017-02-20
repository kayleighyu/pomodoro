//function createTimer(mainElement){}
var Timer = {
  //el:mainElement;
  minutesLeft: 25,
  secondsLeft: 0,
  isOnBreak: false,
  numberOfBreaks: 0,
  init: function(){
    this.cacheDom();
    this.addListeners();
    this.render();
  },
  cacheDom: function(){
    //this.root = document.querySelector(this.el);
    this.minutes = document.querySelector('#minutes');//this.root.document..., then change to classes
    this.seconds = document.querySelector('#seconds');
    this.startButton = document.querySelector('#start');
    this.stopButton = document.querySelector('#stop');
    this.resetButton = document.querySelector('#reset');
  },
  render: function(){
    this.minutes.textContent = this.pad(this.minutesLeft);
    this.seconds.textContent = this.pad(this.secondsLeft);
  },
  addListeners: function(){
    //the bind takes the meaning of 'this' from addListeners and
    //pushes that meaning into the start function
    this.startButton.addEventListener('click', this.start.bind(this));
    this.stopButton.addEventListener('click', this.stop.bind(this));
    this.resetButton.addEventListener('click', this.reset.bind(this));
  },
  reset: function(){
    clearInterval(this.timer);
    this.timer = false;
    this.isOnBreak = false;
    this.numberOfBreaks = 0;
    this.minutesLeft = 25;
    this.secondsLeft = 0;
    this.render();
  },
  stop: function(){
    clearInterval(this.timer);
    this.timer = !this.timer; //this doesn't work right
  },
  start: function(){
    if(!this.timer){
      this.timer = setInterval(this.tick.bind(this), 1000);
    }
  },
  tick: function(){
    if(this.secondsLeft === 0 && this.minutesLeft === 0){
      clearInterval(this.timer);
      this.timer = !this.timer;
      if (this.isOnBreak){
        //alert('Time for work!');
        this.numberOfBreaks +=1;
        this.resetWorkTime();
      } else {
        //alert('Time for a break!');
        this.resetBreakTime();
      }
      this.isOnBreak = !this.isOnBreak;
      this.render();
      return; //tells the function to stop
    }
    this.decrementMinutes();
    this.decrementSeconds();
    this.render();
  },
  decrementMinutes: function(){
    if (this.secondsLeft === 0){
      this.minutesLeft -= 1;
    }
  },
  decrementSeconds: function(){
    if (this.secondsLeft === 0){
      this.secondsLeft = 59;
    } else {
      this.secondsLeft -= 1;
    }
  },
  pad: function(num){
    if(num < 10){
      return `0${num}`;
    } else {
      return num;
    }
  },
  resetWorkTime: function(){
    this.minutesLeft = 25;
    this.secondsLeft = 00;
  },
  resetBreakTime: function(){
    console.log(this.numberOfBreaks);
    if(this.numberOfBreaks < 3){
      this.minutesLeft = 5;
      this.secondsLeft = 0;
    } else {
      this.minutesLeft = 15;
      this.numberOfBreaks = 0;
    }
    // this.secondsLeft = 0;
  },
}
Timer.init();

// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.Circle(container, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#333', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';

bar.animate(1.0);  // Number from 0.0 to 1.0
//var one = createTimer(''#one');
//one.init();

//Data and variable declarations
// var timer;
// var minutesLeft = 0;
// var secondsLeft = 5;
// var isOnBreak = false;
// var numberOfBreaks = 0;
//Getting references to the DOM
// var minutes = document.querySelector('#minutes');
// var seconds = document.querySelector('#seconds');
// var startButton = document.querySelector('#start');
//Initialization code
  //EventListeners
  // startButton.addEventListener('click', start);
  // render();
//function definitions
// function start(){
//   if(!timer){
//     timer = setInterval(tick, 1000);
//   }
// }
// function tick(){
//   if(secondsLeft === 0 && minutesLeft === 0){
//     clearInterval(timer);
//     timer = !timer;
//     if (isOnBreak){
//       numberOfBreaks +=1;
//       resetWorkTime();
//     } else {
//       resetBreakTime();
//     }
//     isOnBreak = !isOnBreak;
//     render();
//     return; //tells the function to stop
//   }
//   decrementMinutes();
//   decrementSeconds();
//   render();
// }
// function decrementMinutes(){
//   if (secondsLeft === 0){
//     minutesLeft -= 1;
//   }
// }
// function decrementSeconds(){
//   if (secondsLeft === 0){
//     secondsLeft = 59;
//   } else {
//     secondsLeft -= 1;
//   }
// }
// function pad(num){
//   if(num < 10){
//     return `0${num}`;
//   } else {
//     return num;
//   }
// }
// function render(){
//   minutes.textContent = pad(minutesLeft);
//   seconds.textContent = pad(secondsLeft);
// }
// function resetWorkTime(){
//   minutesLeft = 00;
//   secondsLeft = 05;
// }
// function resetBreakTime(){
//   if(numberOfBreaks < 3){
//     minutesLeft = 5;
//   } else {
//     minutesLeft = 15;
//     numberOfBreaks = 0;
//   }
//   secondsLeft = 0;
// }
