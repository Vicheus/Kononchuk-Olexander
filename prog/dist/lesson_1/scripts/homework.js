'use strict';

/**
 * Created by shura on 09.03.17.
 */

// task 1
var name = 'Shura';

var user = name;

document.write('<p>' + user + '</p>');

//task 2
var period = 365,
    planet = 'Earth',
    population = '7 billion',
    star = 'Sun';

document.write('<p>We are living on the planet ' + planet + ', it turns around the ' + star + ' during ' + period + ' days. Population of our planet is about ' + population + ' people.</p>');

//task 3
var var33 = 33;

document.write(var33);
document.write('<br />');

var str1 = 'Hello everyone!';
document.write(str1);
document.write('<br />');

var va_R = 288;
document.write(va_R);

//task 4
var x = 3,
    y = 20;

var operation = (72 * y + 22 * x) / 4 + 232;
document.write('<p>' + operation + '</p>');

x = 16;
y = 20;
var operation2 = (100 * y / 2 + 5 * x / 5 - 55) * 6;
document.write('<p>' + operation2 + '</p>');

//task 5
var sleepHours = +prompt('How many hours have you been sleeping tonight?');

document.write('<p>You are lucky, you have been sleeping for ' + sleepHours + ' hours.</p>');

//task 6
var z = 4;
x = 6;
y = 15;

x += y - x++ * z;
document.write('<p>x = ' + x + '</p>');
z = --x - y * 5;
document.write('<p>z = ' + z + '</p>');
y /= x + 5 % z;
document.write('<p>y = ' + y + '</p>');
z = x++ + y * 5;
document.write('<p>z = ' + z + '</p>');
x = y - x++ * z;
document.write('<p>x = ' + x + '</p>');

//task 7
var avg = (x + y + z) / 3;
document.write('<p>average = ' + avg + '</p>');

//task 8
var r = 10,
    h = 2;

var vol = Math.PI * Math.pow(r, 2) * h;
var square = 2 * Math.PI * r * (r + h);
document.write('<p>volume = ' + parseFloat(vol.toFixed(2)) + '</p>');
document.write('<p>square = ' + parseFloat(square.toFixed(2)) + '</p>');