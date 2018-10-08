#!/usr/bin/env node
/*
 *
 * Studio 1A
 * -----------
 * Liow Jia Chen
 * Derrick Teo Hao Ying
 * Tan Yi Lin Elaine
 * Zhang Dongjun
 * 
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

const BLACK_THRESHOLD = 2;
const WHITE_THRESHOLD = 28; // please change

function floor(n){
    return n - (n % 1);
}

function alwaysFalse(){
    return false;
}

ev3_runUntil(alwaysFalse, main);

function main(){

    const raw_rli = ev3_reflectedLightIntensity(color_sensor);
    const rli = (raw_rli > WHITE_THRESHOLD)
        ? WHITE_THRESHOLD
        : (raw_rli < BLACK_THRESHOLD
            ? BLACK_THRESHOLD
            : raw_rli
        );

    display( "current rli: " + rli);

    const left_val = floor(200 * ((WHITE_THRESHOLD - rli - BLACK_THRESHOLD)) / (WHITE_THRESHOLD - BLACK_THRESHOLD));
    const right_val = floor(200 * (rli -BLACK_THRESHOLD) / WHITE_THRESHOLD - BLACK_THRESHOLD);

    if(rli < BLACK_THRESHOLD + 2) {
        ev3_runForDistance(wheel1, 500, 100);
        ev3_runForDistance(wheel2, -500, 100);
    } else if(rli > WHITE_THRESHOLD - 2) {
        ev3_runForDistance(wheel1, -500 , 100);
        ev3_runForDistance(wheel2, 500, 100);
    } else {
        ev3_runForDistance(wheel1, 500 ,left_val);
        ev3_runForDistance(wheel2, 500, right_val);
    }
}