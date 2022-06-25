function realTimeClock() {
    var rtClock = new Date();
    
    var hours = rtClock.getHours();
    var min = rtClock.getMinutes();
    var sec = rtClock.getSeconds();
    
    
    var aMpM = (hours < 12) ? "AM" : "PM";
    
    
    hours = (hours > 12) ? (hours - 12) : hours;
    
    hours = ("0" + hours).slice(-2);
    min = ("0" + min).slice(-2);
    sec = ("0" + sec).slice(-2);
    
    document.getElementById('clock').innerHTML = 
        hours + " : " + min + " : " + sec + " " + aMpM;
    
    var t = setTimeout(realTimeClock, 500);
}

function changeBg() {
    const val = document.getElementById("changeBG").innerHTML;
    if(val == "Turn Off the light") {
        document.getElementById("changeBG").innerHTML = "Turn On the light";
        document.getElementById("clock").style.color = "black";
        document.getElementById("img-background").src = "images/black.jpg";
    }
    else {
        document.getElementById("changeBG").innerHTML = "Turn Off the light";
        document.getElementById("clock").style.color = "rgb(235,152,30)";
        document.getElementById("img-background").src = "images/bulb2.jpg"
    }
    
}