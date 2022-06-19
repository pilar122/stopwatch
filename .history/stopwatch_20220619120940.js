//all the stopwatch mechanics are contained in the var sw object. 
var sw = { 
    // PROPERTIES
    etime : null, //html time display 
    erst : null, //html reset button 
    ego : null, //html start and stop button
    timer : null, //timer object 
    now : 0, //current elapsed time 

    // INITIALIZE
    //On page load, sw.init() will run. All this does is fetch the HTML elements, and “enable” them by attaching the respective start/reset onclick events.
    init : () => {
        //get html elements 
        sw.etime = document.getElementById("sw-time");
        sw.erst = document.getElementById("sw-rst");
        sw.ego - document.getElementById("sw-go");

        //ENABLE BUTTON CONTROLS
        sw.erst.onclick = sw.reset;
        sw.ego.onclick = sw.start;
        sw.erst.disabled = false;
        sw.ego.disabled = false;
    },

    //start
    start : () => {
        sw.timer = setInterval(sw.tick, 1000); //to start the stopwatch we set a timer at sw.timer to run sw.tick() at every one second
        sw.ego.value = "stop"; //once the timer has started we switch the start button into a stop button
        sw.ego.onclick = sw.stop; 
    },

    //stop 
    stop : () => {
        clearInterval(sw.timer);
        sw.timer = null; //To stop, we simply clear the sw.timer timer.
        sw.ego.value = "Start"; //once stopped we switch the stop button back into the start button
        sw.ego.onclick = sw.start;
    },


    //This one runs at every 1-second interval when the stopwatch is started. Looks confusing at first, but keep calm and look carefully again. All it does is to calculate the elapsed time, and display it in a “nice HOUR:MIN:SEC manner”.
    //timer action
    tick : () => {
        //calculate hors, mins and seconds
        sw.now++;
        let hours = 0, mins = 0, secs = 0,
        remain = sw.now;
        hours = Math.floor(remain / 3600);
        remain -= hours * 3600;
        mins = Math.floor(remain / 60);
        remain -= mins * 60;
        secs = remain;

        // update the display timer 
        if (hours<10) {hours = "0" + hours; }
        if (hours<10) {mins = "0" + mins; }
        if (secs<10) {secs = "0" + secs; }
        sw.etime.innerHTML = hours + ":" + mins + ":" + secs; 
    },

    //Stop the current timer and reset the elapsed time back to 0. 
    //reset
    reset : () => {
        if (sw.timer !=null) { sw.stop(); }
        sw.now = -1;
        sw.tick();
    }
};
//window.addEventListener("load", sw.init);