const time_el = document.querySelector('.stopwatch .timer');
const btnStart = document.getElementById('start');
const btnPause = document.getElementById("pause");
const btnReset = document.getElementById("reset");


let seconds = 0;
let interval = null;

btnStart.addEventListener('click',startTimer);
btnPause.addEventListener('click',pauseTimer);
btnReset.addEventListener('click',resetTimer)

function watch() {
    seconds++;
    let hrs = Math.floor(seconds / 3600);
    let min = Math.floor((seconds - (hrs*3600))/60);
    let sec = seconds % 60;
    
    if (sec < 10)
        sec = '0 ' + sec;
    if (min < 10)
        min = '0 ' + min;
    if (hrs < 10)
        hrs = '0 ' + hrs;
    
    time_el.innerHTML = `${hrs} : ${min} : ${sec}`;
}


function startTimer() {
    if (interval)
        return;
    
    interval = setInterval(watch, 1000);
}

function pauseTimer() {
    clearInterval(interval);
    interval = null;
}

function resetTimer() {
    seconds = 0;
    time_el.innerHTML = '0 0 : 0 0 : 0 0';
    pauseTimer();
}
