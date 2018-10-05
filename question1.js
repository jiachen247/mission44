#!/usr/bin/env node
/*
 * Write a program that makes your robot move forward for a distance of 10cm. In order to do that, you need to find out the speed of the robot when both motors are moving forward.
 * 
 * Setup
 * =====
 * Left wheel => Port A
 * Right Wheel => Port B
 *
 */

require('./node_modules/ev3_source.js')

display("=======================");
display(" |      Question 1     | ");
display("=======================");
display("moving robot 10 cm...\n\n");

const TARGET_DISTANCE = 10; // 10 cm
const WHEEL_RADIUS = 3.5;
const DISTANCE_PER_ROTATION = 2 * 3.14159265359 * WHEEL_RADIUS;

const wheel1 = ev3_motorA();
const wheel2 = ev3_motorB();

const floor = function(n){ return n - (n % 1)};

ev3_runForDistance(wheel1, floor(TARGET_DISTANCE/DISTANCE_PER_ROTATION * 360), 500);
ev3_runForDistance(wheel2, floor(TARGET_DISTANCE/DISTANCE_PER_ROTATION * 360), 500);
