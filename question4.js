#!/usr/bin/env node
/*
 * * 
 * Setup
 * =====
 * Left wheel => Port B
 * Right Wheel => Port C
 * Color Sensor => Port 1
*/

require('./node_modules/ev3_source.js');

display("=======================");
display(" |      Question  4    | ");
display("=======================");
display("following a line...\n\n");

const color_sensor = ev3_colorSensor();
const wheel1 = ev3_motorB();
const wheel2 = ev3_motorC();

const BLACK_THRESHOLD = 1; 
const WHITE_THRESHOLD = 28; // please change

const floor = function(n){ return n - (n % 1)};

const alwaysFalse = function(){
    return false;
}

ev3_runUntil(alwaysFalse, main);

function main(){

    const rli = ev3_reflectedLightIntensity(color_sensor);
    const new_rli = (rli > WHITE_THRESHOLD) ? WHITE_THRESHOLD: rli;
    
    display( "current rli: " + new_rli);

    const left_val = floor(200 * ((WHITE_THRESHOLD - new_rli- BLACK_THRESHOLD))/(WHITE_THRESHOLD - BLACK_THRESHOLD));
    const right_val = floor(200 * (new_rli -BLACK_THRESHOLD)/ WHITE_THRESHOLD-BLACK_THRESHOLD);

    if(new_rli < 2){
        ev3_runForDistance(wheel1, 500, 100);
        ev3_runForDistance(wheel2, -500, 100 );
    }else if(new_rli > WHITE_THRESHOLD - 2){
        ev3_runForDistance(wheel1, -500 , 100) ;
        ev3_runForDistance(wheel2, 500, 100) ;
    }else{
        ev3_runForDistance(wheel1, 500 ,left_val) ;
        ev3_runForDistance(wheel2, 500, right_val) ;
    }
}