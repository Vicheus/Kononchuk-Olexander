"use strict";

/**
 * Created by shura on 11.03.17.
 */
////////////////////while loop
// var i = 1;

// while (i <= 100) {
// 	console.log(i);
// 	i += 2;
// }

//////////////////////// do  ... while loop
// var i = 0;

// do {
// 	console.log(i);
// 	i++;

// 	if (i === 50) break;
// } while (i <= 100);

///////////////////// for loop

// for (var i = 0; i < 100; i++) {
// 	console.log(i);
// }

// var sum = 0;

// for (var i = 0; i <= 100; i++) {
// 	sum += i;
// }

// console.log(sum);

///////////////////////task
// var sumOdd = 0,
//     sumEven = 0,
//     rez = 1;

//     for ( var i = 0; i < 100; i++ ) {
//     	if ( i % 2 === 0) {
//     		sumOdd += i;
//     	} else {
//     		sumEven += i;
//     	}
//     	if ( i % 5 === 0 && i !== 0) {
//     		rez *= i;
//     	}
//     }

//     console.log('<p>Odd sum = ' + sumOdd + '</p>');
//     console.log('<p>Even sum = ' + sumEven + '</p>');
//     console.log('<p>Rez = ' + rez + '</p>');

/////////////////////////////Arrays

// var arr = [],
//     arr1 = new Array();

// var arr = ['red', 'green', 'blue', 'red'];
// arr[4] = 'black';
// arr[0] = 1;
// console.log(arr.indexOf('red'));
// console.log(arr.length);

// for (	var i = 0; i < arr.length; i++ ) {
// 	document.write('<div class="rectangle"style="background-color:' + arr[i] + ';">' + i + '</div>');
// }

// 			arr.push('black', 'orange', 'yellow', 2);
// 			console.log(arr);

// 			var lastElement = arr.pop();
// 			console.log(arr);
// 			console.log(lastElement);

// 			arr.unshift('gray', 'white', 'aqua');
// 			console.log(arr);

// 			var firstElement = arr.shift();
// 			console.log(firstElement);
// 			console.log(arr);

// // delete operator DO NOT USE WITH ARRAYS !!!!!!!!!!!!!!!!!

// 			var elem = arr.splice(0, 3, 'I', 'study', 'javaScript');
// 			console.log(elem, arr);

// var colors = ['red', 'green', 'blue', 'red'],
// 		arr = ['black', 'yellow'];

// var rez = colors.concat(arr);
// console.log(rez);

// var colors = ['red', 'green', 'blue', 'red'],
// 		arr;

// arr = colors;

// arr[0] = false;
// console.log(colors, arr);

// var newArr = [];
// for (var i = 0; i < colors.length; i++) {
// 	arr.push(colors[i]);
// }

// arr[0] = true;
// console.log(arr, colors);

// var str = 'Hello World!';
// var splitRez = str.split(' ');
// console.log(splitRez);
// var arr = splitRez.join('/');
// console.log(arr);

//				var arr = [
//					[1, 2, 3],
//					[4, 5, 6],
//					[7, 8, 9]
//				], randomNumbers;
// console.log(arr);

// for (var i =0; i < arr.length; i++) {
// 	for (var j = 0; j < arr[i].length; j++) {
// 		document.write(arr[i][j] + ' ');
// 	}
// 	document.write('<br>');
// }

//				for (var i = 0; i < 10; i++) {
//					var random = Math.round( Math.random() * 100 );
//					randomNumbers.push(random);
//				}
//				console.log(randomNumbers);

Math.min(1, 4, 8, 18, -4); //min value
Math.max(1, 2, 47, 8, 46, -8); //max value