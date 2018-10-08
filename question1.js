#!/usr/bin/env node
/*
 * Write a program that makes your robot move forward for a distance of 10cm. In order to do that, you need to find out the speed of the robot when both motors are moving forward.
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
 * Left Wheel => Port B
 * Right Wheel => Port C
 *
 */

require('./node_modules/ev3_source.js')

display("=======================");
display(" |      Question 1     | ");
display("=======================");
display("moving robot 10 cm...\n\n");

const TARGET_DISTANCE = 10; // 10 cm
const WHEEL_RADIUS = 3.6;
const DISTANCE_PER_ROTATION = 2 * 3.14159265359 * WHEEL_RADIUS;

const wheel1 = ev3_motorB();
const wheel2 = ev3_motorC();

function floor(n){
    return n - (n % 1);
}

ev3_runForDistance(wheel1, floor(TARGET_DISTANCE / DISTANCE_PER_ROTATION * 360), 100);
ev3_runForDistance(wheel2, floor(TARGET_DISTANCE / DISTANCE_PER_ROTATION * 360), 100);

