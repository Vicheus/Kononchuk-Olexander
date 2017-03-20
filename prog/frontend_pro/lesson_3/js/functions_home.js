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
    var text = "<p>Number is not simple</p>";
    for (var i = 2; i < Math.abs(a); i++) {
        if (a % i === 0) {
            text = "<p>Number is not simple</p>";
            break;
        }
    }
    document.write(text);
    var res;
    (a % 2 !== 0) ?
        document.write("<p>" + a + " is not divide on 2</p>") :
        document.write("<p>" + a + " % 2 = " + a / 2 + "</p>");
    (a % 3 !== 0) ?
        document.write("<p>" + a + " is not divide on 3</p>") :
        document.write("<p>" + a + " % 3 = " + a / 3 + "</p>");
    (a % 5 !== 0) ?
        document.write("<p>" + a + " is not divide on 5</p>") :
        document.write("<p>" + a + " % 5 = " + a / 5 + "</p>");
    (a % 6 !== 0) ?
        document.write("<p>" + a + " is not divide on 6</p>") :
        document.write("<p>" + a + " % 6 = " + a / 6 + "</p>");
    (a % 9 !== 0) ?
        document.write("<p>" + a + " is not divide on 9</p>") :
        document.write("<p>" + a + " % 9 = " + a / 9 + "</p>");
}
someNumber(Math.round(Math.random() * 100));

// optional task
var menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function multiplyNumeric(obj) {
    for (var key in obj) {
        if(isNumeric(obj[key])) {
            obj[key] = obj[key] * 2;
        }
    }
}
multiplyNumeric(menu);

console.log(menu);

let a = 10;

let b = 20;

