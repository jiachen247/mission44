#!/usr/bin/env node
/*
 * * 
 * Setup
 * =====
 * Left wheel => Port A
 * Right Wheel => Port B
 * Color Sensor => Port 1
*/

require('./node_modules/ev3_source.js');

display("=======================");
display(" |      Question  4    | ");
display("=======================");
display("follow a line...\n\n");


const color_sensor = ev3_colorSensor();
const wheel1 = ev3_motorA();
const wheel2 = ev3_motorB();

// Constants
const BLACK_THRESHOLD = 20;
const MAX_DISTANCE = 570;
const WHEEL_RADIUS = 3.5;
const DISTANCE_PER_ROTATION = 2 * 3.14159265359 * WHEEL_RADIUS;