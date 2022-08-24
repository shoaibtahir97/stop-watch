var min = 0;
var sec = 0;
var miliSec = 0;


var minHeading = document.getElementById("min")
var secHeading = document.getElementById("sec")
var msecHeading = document.getElementById("msec")

var interval;


function startStopWatch () {
    miliSec++;
    msecHeading.innerHTML = miliSec;
    if(miliSec > 99){
        sec++;
        secHeading.innerHTML = sec;
        miliSec = 0;
    }
    else if(sec > 60){
        min++;
        minHeading.innerHTML = min;
        sec = 0
    }
    
}

function start(){
    interval = setInterval(startStopWatch, 10)
}

function stop(){
    clearInterval(interval)
}