#!/usr/bin/env node
/*
 * Write a program that makes the robot turn 90° counterclockwise. You may choose to solve it the same way you did for the previous question or implement your own solution.
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
 */

require('./node_modules/ev3_source.js')

display("=======================");
display(" |      Question 2     | ");
display("=======================");
display("turn robot 90° counter clockwise...\n\n");

// PLEASE MAKE SURE RIGHT WHEEL IS A AND LEFT WHEEL IS B RESPECTIVELY
const wheel1 = ev3_motorB();
const wheel2 = ev3_motorC();

ev3_runForDistance(wheel1, -180, 400);
ev3_runForDistance(wheel2, 180, 400);
         