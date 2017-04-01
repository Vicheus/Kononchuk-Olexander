"use strict";

/**
 * Created by shura on 11.03.17.
 */
var i,
    j,
    minValue,
    maxValue,
    oddElements = [],
    evenElements = [],
    summ = 0,
    zeroCount = 0;
//task 1
document.write("<h3>Exercise 1</h3>");
var firstArray = [[2, 5, 6], [7, 3, 9], [3, 2, 6]];
var readableView = '';
for (i = 0; i < firstArray.length; i++) {
    readableView += firstArray[i].join(", ") + "</br>";
}
document.write(readableView);

//task 2
document.write("<h3>Exercise 2</h3>");
var randomArray = new Array(10);
for (i = 0; i < randomArray.length; i++) {
    randomArray[i] = Math.round(Math.random() * 100);
}
minValue = randomArray[0];
maxValue = randomArray[0];
for (i = 0; i < randomArray.length; i++) {
    randomArray[i] < minValue ? minValue = randomArray[i] : minValue;
    randomArray[i] > maxValue ? maxValue = randomArray[i] : maxValue;
    randomArray[i] === 0 ? zeroCount++ : zeroCount;
    randomArray[i] % 2 === 0 ? oddElements.push(randomArray[i]) : evenElements.push(randomArray[i]);
    summ += randomArray[i];
}
console.log(randomArray);
document.write("<p>Odd elements are: " + oddElements.join(", ") + "</p>", "<p>Even elements are: " + evenElements.join(", ") + "</p>", "<p>Min value is: " + minValue + "</p>", "<p>Max value is: " + maxValue + "</p>", "<p>Summ of all elements is: " + summ + "</p>", "<p>Average value is: " + summ / randomArray.length + "</p>");

//task 3
document.write("<h3>Exercise 3</h3>");
var twoLevelArray = new Array(5),
    display = '';
for (i = 0; i < twoLevelArray.length; i++) {
    twoLevelArray[i] = new Array(5);
    for (j = 0; j < twoLevelArray[i].length; j++) {
        twoLevelArray[i][j] = Math.round(Math.random() * 100);
    }
}
for (i = 0; i < twoLevelArray.length; i++) {
    twoLevelArray[i][i] > 0 ? twoLevelArray[i][i] = "<strong>1</strong>" : twoLevelArray[i][i] = "<strong>0</strong>";
    display += twoLevelArray[i].join(", ") + "</br>";
}
document.write(display);

//task 4
document.write("<h3>Exercise 4</h3>");
var fruits = ["orange", "banana", "pear"];
document.write("<p>Count of array elements are: " + fruits.length + "</p>");
fruits.unshift("grape");
fruits.push("apple", "pineapple");
document.write("<p>Count of array elements are: " + fruits.length + "</p>");
fruits.shift();
fruits.pop();
document.write("<p>Count of array elements are: " + fruits.length + "</p>");
document.write("<p>Fruits array: " + fruits.join(" ") + "</p>");

//task 5
document.write("<h3>Exercise 5</h3>");
var arrayTask5 = [[10, 2, 3, 4, 1], [-4, 12, 8, 5, 2], [3, 7, -1, 0, 15], [0, -5, 1, 14, -7], [3, 9, 10, -2, 0]],
    countNegative = 0,
    countPositive = 0,
    summMain = 0;
minValue = arrayTask5[0][0];
maxValue = arrayTask5[0][0];
zeroCount = 0;
summ = 0;
display = '';

for (i = 0; i < arrayTask5.length; i++) {
    summMain += arrayTask5[i][i];
    for (j = 0; j < arrayTask5.length; j++) {
        if (arrayTask5[i][j] > 0) {
            countPositive++;
        } else if (arrayTask5[i][j] < 0) {
            countNegative++;
        } else {
            zeroCount++;
        }
        arrayTask5[i][j] > maxValue ? maxValue = arrayTask5[i][j] : maxValue;
        arrayTask5[i][j] < minValue ? minValue = arrayTask5[i][j] : minValue;
        summ += arrayTask5[i][j];
    }
    display += arrayTask5[i].join(", ") + "</br>";
}
document.write("<p>" + display + "</p>", "<p>Min value is: " + minValue + "</p>", "<p>Max value is: " + maxValue + "</p>", "<p>Count of negative elements are: " + countNegative + "</p>", "<p>Count of positive elements are: " + countPositive + "</p>", "<p>Count of zeros: " + zeroCount + "</p>", "<p>Summ of all elements is: " + summ + "</p>", "<p>Summ of all elements on main is: " + summMain + "</p>");

//task 6
document.write("<h3>Exercise 6</h3>");
var swapElementArray = [[4, 5, 2], [4, 6, 7], [3, 9, 8]],
    mini = 0,
    minj = 0,
    maxi = 0,
    maxj = 0;
minValue = swapElementArray[0][0];
maxValue = swapElementArray[0][0];
for (i = 0; i < swapElementArray.length; i++) {
    for (j = 0; j < swapElementArray[i].length; j++) {
        if (swapElementArray[i][j] > maxValue) {
            maxValue = swapElementArray[i][j];
            maxi = i;
            maxj = j;
        }
        if (swapElementArray[i][j] < minValue) {
            minValue = swapElementArray[i][j];
            mini = i;
            minj = j;
        }
    }
}
swapElementArray[mini].splice(minj, 1, maxValue);
swapElementArray[maxi].splice(maxj, 1, minValue);

for (i = 0; i < swapElementArray.length; i++) {
    document.write(swapElementArray[i].join(", ") + "</br>");
}

//task 7
document.write("<h3>Exercise 7</h3>");
var sourceArray = [[4, 5, 2], [4, 6, 7], [3, 9, 8]],
    resultArray = new Array(sourceArray.length);
mini = 0;
maxi = 0;
minValue = sourceArray[0][0];
maxValue = sourceArray[0][0];
for (i = 0; i < sourceArray.length; i++) {
    resultArray[i] = new Array(sourceArray[i].length);
    for (j = 0; j < sourceArray[i].length; j++) {
        resultArray[i][j] = sourceArray[i][j];
        if (sourceArray[i][j] > maxValue) {
            maxValue = sourceArray[i][j];
            maxi = i;
        }
        if (sourceArray[i][j] < minValue) {
            minValue = sourceArray[i][j];
            mini = i;
        }
    }
}

for (i = 0; i < sourceArray.length; i++) {
    resultArray[maxi][i] = sourceArray[mini][i];
    resultArray[mini][i] = sourceArray[maxi][i];
}
for (i = 0; i < swapElementArray.length; i++) {
    document.write(resultArray[i].join(", ") + "</br>");
}

//task 8
document.write("<h3>Exercise 8</h3>");

var x1 = [2, 4, 5, -2, 8, 10],
    x2 = [4, 1, 8, 2, 11, -2],
    x1min = x1[0],
    x2min = x2[0],
    z;
for (i = 0; i < x1.length; i++) {
    x1[i] < x1min ? x1min = x1[i] : x1min;
    x2[i] < x2min ? x2min = x2[i] : x2min;
}

z = (x1min + x2min) / 2;
document.write("<p>First array: " + x1.join(", ") + "</p>");
document.write("<p>Second array: " + x2.join(", ") + "</p>");
document.write("<p>First array min element: " + x1min + "</p>");
document.write("<p>Second array min element: " + x2min + "</p>");