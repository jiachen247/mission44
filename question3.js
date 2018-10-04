#!/usr/bin/env node
/*
* Write a program which makes your robot visit all 4 quadrants regardless of the initial position and orientation.
*/
require('./node_modules/ev3_source.js');

display("=======================");
display(" |      Question  3    | ");
display("=======================");
display("explore all 4 quardrants...\n\n");

const color_sensor = ev3_colorSensor();
const wheel1 = ev3_motorA();
const wheel2 = ev3_motorB();

// Constants
const BLACK_THRESHOLD = 20;
const MAX_DISTANCE = 570;
const WHEEL_RADIUS = 3.5;
const DISTANCE_PER_ROTATION = 2 * 3.14159265359 * WHEEL_RADIUS;

const floor = function(n){ return n - (n % 1)};

function is_black(color_sensor){

    const rval = ev3_colorSensorRed(color_sensor);
    const gval = ev3_colorSensorGreen(color_sensor);
    const bval = ev3_colorSensorBlue(color_sensor);

    return ((rval + gval + bval) / 3) < BLACK_THRESHOLD;
}

function move(distance){
    ev3_runForDistance(wheel1, floor(distance / DISTANCE_PER_ROTATION * 360), 100);
    ev3_runForDistance(wheel2, floor(distance / DISTANCE_PER_ROTATION * 360), 100);
}

function turn_left(){
    ev3_runForDistance(wheel1, -200, 1000);
}

function stop(){
    ev3_stop(wheel1);
    ev3_stop(wheel2);
}

const alwaysFalse = function(){
    return false;
}

move(MAX_DISTANCE);
ev3_runUntil(alwaysFalse, main);

function main(){
    
    if(is_black(color_sensor)){
        display("!BLACK DETECTED!");
        stop();
        turn_left();
        ev3_pause(200);
        move(MAX_DISTANCE);
    } else {
        display("keep swimming ~~~");
    }
}
