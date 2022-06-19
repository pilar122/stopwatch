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
}