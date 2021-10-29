//defining vars to hold mins and secs
let secs = 0;
let millisecs = 0;

//to hold setinterval()
let interval=null;

//to hold stopwatch status
let status = "stopped";

//stopwatch function()
function stopwatch(){
     millisecs++;
    

    //flipping over to secs
    if(millisecs/1000==1){
        millisecs=0;
        secs++;
    }
    //displaying updated time values
    document.querySelector(".display").innerHTML = secs+"."+millisecs
}

//8/12/15/17 sec, +2 and DNF alerts
function warning(){
    if(secs==8){
        alert("8 seconds");
    }
    if(secs==12){
        alert("12 seconds");
    }
    if(secs>15<17){
        alert("+2");
    }
    if(secs>=17){
        alert("DNF");
    }
}




function startstop(){
    if(status=="stopped){
       
       //start the stopwatch by calling setinterval()
       interval = window.setInterval(stopwatch, 10);
       document.getElementbyId("startstop").innerHTML = "stop";
       status = "started";
     }
     else{
          window.clearInterval(interval);
          document.getElementbyId("startstop").innerHTML = "start";
          status = "stopped";
     }     
}

