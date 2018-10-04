#!/usr/bin/env node
/*
* Write a program that makes the robot turn 90° counterclockwise. You may choose to solve it the same way you did for the previous question or implement your own solution.
*/
require('./node_modules/ev3_source.js')

display("=======================");
display(" |      Question 2     | ");
display("=======================");
display("turn robot 90° counter clockwise...\n\n");

// PLEASE MAKE SURE RIGHT WHEEL IS A AND LEFT WHEEL IS B RESPECTIVELY
const wheel1 = ev3_motorA();
const wheel2 = ev3_motorB();

ev3_runForDistance(wheel1, -180, 800);
ev3_runForDistance(wheel2, 180, 800);