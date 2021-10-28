//defining vars to hold mins and secs
let secs = 0;
let millisecs = 0;

//stopwatch function()
function stopwatch(){
     millisecs++;
    

    //flipping over to secs
    if(millisecs/1000==1){
        millisecs=0;
        secs++;
    }
    //displaying updated time values
    document.getElementById("display").innerHTML = secs+"."+millisecs
}

//8/12/15/17 sec, +2 and DNF alerts
function warning(){
    if(secs==8){
        console.log("8 seconds")
    }
    if(secs==12){
        console.log("12 seconds")
    }
    if(secs>15<17){
        console.log("+2")
    }
    if(secs>=17){
        console.log("DNF")
    }
}

window.setInterval(stopwatch, 1000);


