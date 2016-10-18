'use strict';
//var number = +prompt("Please, input the number from 1 to 100");
		function square (num) {
			if (num) {
				var rezult = num*num;
				document.write("Rezult is: " + rezult);
			}
			else {
				document.write("You did not input correct number<br />");
			}
		}
		//square(number);
		function fio () {
			var arrayFio = ['first name', 'fathers name', 'last name'];
			var rezult = new Array;
			for (var i = 0; i <= (arrayFio.length -1); i++) {
				var name = prompt("Please, input your " + arrayFio[i]);
				if (name === null) {
					rezult[0] = "You are fucking idiot, dude!";
					break;
				}
				else if (name && !parseInt(name) && parseInt(name) !== 0) {
					rezult[i] = name;
				}
				else {
					i = i - 1;
				}
			}
			var fullName = rezult.join(" ");
			return fullName;
		}
		//document.write("Your full name is: " + fio());

//exercise 1 from http://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
		function reverseNumber () {
			do {
				var number = parseInt(prompt("Please insert a number"));
			}
			while (isNaN(number));
			var userString = String(number);
			var rezult = new Array(userString.length);
			var j = 0;
			for (var i = userString.length - 1; i >= 0; i--) {
				rezult[j] = userString[i];
				j++;
			}
			var newNumber = rezult.join("");
			newNumber = parseInt(newNumber);
			return newNumber;
		}
		//document.write("Reverse of your number is: " + reverseNumber() + "<br/>");

//exercise 2 from http://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
		function polindrome () {
			do {
				var input = prompt("Please insert a string");
			}
			while (!input);
			var rezult = new Array(input.length);
			var rezult1 = new Array(input.length);
			var j = 0;
			for (var i = input.length - 1; i >= 0; i--) {
				rezult[j] = input[i];
				rezult1[i] = input[i];
				j++;
			}
			var j = 0;
			for (var i = 0; i <= rezult.length - 1; i++) {
				if (rezult[i] == " ") {
					rezult.splice(i,1);
				}
				if (rezult1[i] == " ") {
					rezult1.splice(i,1);
				}
				j++;
			}
			var newString = rezult.join("");
			var newString1 = rezult1.join("");
			if (newString == newString1) {
				var text = "String is polindrome";
			}
			else {
				text = "String isn\'t polindrome";
			}
			return text;
		}
		//document.write(polindrome() + "<br/>");

//exercise 3 from http://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
		function combination () {
			var userString = prompt("Enter your word", "here");
			var arrayOfCombinations = new Array;
			var counter = 0;
			var counter1 = userString.length; 
			for (var i = 0; i <= userString.length - 1; i++) {
				for (var j = 0; j <= userString.length - 1; j++) {
					var userStringArray = new Array(userString.length);
					for (var k = 0; k <= userString.length - 1; k++) {
						userStringArray[k] = userString[k];
					}
					arrayOfCombinations[counter] = userStringArray.splice(i, counter1 - j).join("");
					if (arrayOfCombinations[counter] == "") {
						arrayOfCombinations.splice(counter, 1);
						counter--;
					}
					counter++;
				}
				counter1--;
			}
			var rezult = arrayOfCombinations.join("<br/>");

			return rezult;
		}
		//document.write(combination());

//exercise 4 from http://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php 
		function alphabetOrder () 
		{
			var userString = prompt("Please input your string here, only letters are allowed");
			var alphabet = ["a", "b", "c", "d",	"e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
			var rezult = new Array ();
			for (var i = 0; i <= alphabet.length - 1; i++) {
				for (var j = 0; j <= userString.length - 1; j++) {
					if (userString[j] == alphabet[i]) {
						rezult.push(userString[j]);
					}
				}
			}
			var outputString = rezult.join("");

			return outputString;
		}
		//document.write(alphabetOrder());

//exercise 5 from http://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
		function firstLetterEveryWordToUpperCase () 
		{
			var userString = prompt("Please input your string here, only letters are allowed");
			var inputArray = userString.split(" ");
			var rezultArray = new Array;
			for (var i = 0; i < inputArray.length; i++) {
			 	rezultArray[i] = inputArray[i].charAt(0).toUpperCase() + inputArray[i].slice(1);
			 }

			return rezultArray.join(" ");
		}
		//console.log(firstLetterEveryWordToUpperCase());

//exercise 6 from http://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
		function findLongestWord ()
		{
			var userString = prompt("Please input your string here, only letters are allowed");
			var inputArray = userString.split(" ");
			var longestWord = "a";
			for (var i = 0; i < inputArray.length; i++) {
				if(inputArray[i].length >= longestWord.length) {
					longestWord = inputArray[i];
				}
			}

			return longestWord;
		}
		//console.log("the longest word in the sentence is: " + findLongestWord());

//exercise 7 from http://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
		function countVowels () 
		{
			var userString = prompt("Please input your string here, only letters are allowed");
			var vowelArray = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
			var count = 0;
			for (var i = 0; i < userString.length; i++) {
				for (var j = 0; j < vowelArray.length; j++) {
					if(userString.charAt(i) == vowelArray[j]) {
						count++;
					}
				}
			}

			 return count;
		}
		//console.log("Count of vowels is: " + countVowels());

//exercise 8 from http://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
		function isPime () 
		{
			var userString = +prompt("Please input the number you want to check, here");
			var counter = 0;
			if (userString == 1) {
				var rezult = 'Number is not a prime';
			} else {
				for (var i = 2; i < userString; i++) {
					if (userString%i == 0) {
						counter++;
					}	
				}
				if (counter == 0) {
					var rezult = 'Number is prime';
				} else {
					rezult = 'Number is not prime';
				}
			}
			

			return rezult;
		}
		//console.log(isPime());

//exercise 10 from http://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
		function identityMatrix() 
		{
			var n = +prompt("Input first number here");
			var matrix = new Array;
			for (var i = 0; i < n; i++) {
				for (var j = 0; j < n; j++) {
					if (i == j) {
						document.write(1 + " ");
					} else {
						document.write(0 + " ");
					}
				}
			document.write("<br/>");
			}
		}
		//identityMatrix();

//exercise 11 from http://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
		function secondLowersecondBiggerNumbers (arr) 
		{
			var sortedArray = arr.sort(function(a, b) {return a-b});
			var rezultArray = [sortedArray[1], sortedArray[sortedArray.length - 2]];
			var rezult = {sortRezult: sortedArray.join(", "), summary: rezultArray.join(", ")};//created object of rezults in case I want to print outsorted array

			return rezult.summary;
		}
		//console.log(secondLowersecondBiggerNumbers([1, 71, 453, 2, -19, 26, 0, 32, 98]));

//exercise 12 from http://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
		function isPerfectNumber () 
		{
			var userNumber = +prompt("Input your number you want to check here");
			var divisorsSum = null;
			var rezult;
			for (var i = 1; i < userNumber; i++) {
				if (userNumber%i === 0) {
					divisorsSum += i;
				}
			}
			userNumber === divisorsSum && divisorsSum !== 0 ? rezult = 'The number is perfect' : rezult = 'The number is not perfect';

			return rezult
		}
		// console.log(isPerfectNumber());

//exercise 12 from http://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
		function factorsOfNumber () 
		{
			var userNumber = +prompt("Input number you want to compute factors here");
			var divisorsArray = new Array;
			var factorsArray = new Array;
			for (var i = 2; i < userNumber; i++) {
				if (userNumber%i === 0) {
					divisorsArray.push(i);
				}
			}
			var counter = 0;
			for (var i = 0; i <= divisorsArray.length - 2; i++) {
				for (var j = 1; j <= divisorsArray.length - 1; j++) {
					 if (divisorsArray[i] * divisorsArray[i] === userNumber) {
						factorsArray[counter] = [divisorsArray[i], divisorsArray[i]];
						counter++;
					} else if (divisorsArray[i] * divisorsArray[j] === userNumber) {
						factorsArray[counter] = [divisorsArray[i], divisorsArray[j]];
						counter++;
					}
				}
			}
			if (factorsArray.length === 0) {
				return "This nuber has not any factors";
			}

			return factorsArray;
		}
		console.log(factorsOfNumber());

//exercise 14 from http://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
		function amoutToCoins () 
		{
			var amount = +prompt("Input your amount here");
			var coins = [50, 25, 10, 5, 2, 1];
			var sum = 0;
			var rezult = new Array;
			if (amount <= 0) {
				rezult = 'Please input correct amount';
			} else {
				while (sum < amount) {
					for (var i = 0; i <= coins.length - 1; i++) {
						if (coins[i] === amount) {
							sum = coins[i];
							rezult.push(coins[i]);
							break;
						} else if (sum + coins[i] <= amount) {
							sum += coins[i];
							rezult.push(coins[i]);
							i--;
						}
					}
				}
				rezult = rezult.join(", ");
			}
			
		return rezult;
		}
		// console.log(amoutToCoins());

//exercise 15 from http://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
		function exp () 
		{
			var number = +prompt("Input the number");
			var exponent = +prompt("Input exponent");
			var rezult = 1;
			for (var i = 1; i <= exponent; i++) {
				rezult *= number; 
			}

			return rezult;
		}
		// console.log(exp());

//exercise 16 from http://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
		function uniqueCharactersFromString () 
		{
			var userString = prompt("Plese type your string", "here");
			var rezult = [userString.charAt(0)];
			var counter;
			for (var i = 1; i <= userString.length - 1; i++) {
				counter = 1;
				for (var j = 0; j <= rezult.length - 1; j++) {
					if (userString.charAt(i) === rezult[j]) {
						counter = 0;
					}
				}
				if (counter === 1) {
					rezult.push(userString.charAt(i));
				}
			}

			return rezult.join("");
		}
		// console.log(uniqueCharactersFromString());