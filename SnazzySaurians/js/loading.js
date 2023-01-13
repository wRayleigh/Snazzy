window.onload = function() {
    // select the div to fade out
let div = document.querySelector(".loading-screen");

// set the div's initial opacity
div.style.opacity = 1;

// delay the animation by 3 seconds
let delay = 3000;
setTimeout(function() {
    // fade out the div over 2 seconds
    let fadeAmount = 0.05;
    let fadeInterval = 50;
    let fadeTime = 2000;
    let intervalId = setInterval(function() {
        div.style.opacity -= fadeAmount;
        if (div.style.opacity <= 0) {
            clearInterval(intervalId);
        }
    }, fadeInterval);
    setTimeout(function() {
        clearInterval(intervalId);
    }, fadeTime);
}, delay);


    
    // hide the loading screen
    setTimeout(function(){
        div.style.display = 'none';
    }, 4000);
  }




