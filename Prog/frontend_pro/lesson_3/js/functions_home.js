/**
 * Created by shura on 16.03.17.
 */
//task 1
document.write("<h3>Exercise 1</h3>");
function add(a, b) {
    document.write("<p>Summ: " + a + b + "</p>");
}

function sub(a, b) {
    document.write("<p>Sub: " + (a - b) + "</p>");
}

function mul(a, b) {
    document.write("<p>Mul: " + a * b + "</p>");
}

function div(a, b) {
    (b === 0) ?
        document.write("<p>You can not divide on null</p>") :
        document.write("<p>Div: " + a / b + "</p>");
}

// add(2, 3);
// sub(2, 3);
// mul(2, 3);
// div(2, 3);

//task 2
document.write("<h3>Exercise 2</h3>");

function someNumber(a) {
    (a > 0) ? document.write("<p>Number is positive</p>") : document.write("<p>Number is not positive</p>");
    for (var i = 2; i < Math.abs(a); i++) {
        (a % i === 0) ? document.write("<p>Number is not simple</p>") : document.write("<p>Number is not simple</p>");
    }
    var res;
    (res = a % 2 === 0) ?
        document.write("<p>" + a + " % 2 is not complete </p>") :
        document.write("<p>" + a + " % 2 = " + res + "</p>");
    (res = a % 3 === 0) ?
        document.write("<p>" + a + " % 3 is not complete </p>") :
        document.write("<p>" + a + " % 3 = " + res + "</p>");
    (res = a % 5 === 0) ?
        document.write("<p>" + a + " % 5 is not complete </p>") :
        document.write("<p>" + a + " % 5 = " + res + "</p>");
    (res = a % 6 === 0) ?
        document.write("<p>" + a + " % 6 is not complete </p>") :
        document.write("<p>" + a + " % 6 = " + res + "</p>");
    (res = a % 9 === 0) ?
        document.write("<p>" + a + " % 9 is not complete </p>") :
        document.write("<p>" + a + " % 9 = " + res + "</p>");
}