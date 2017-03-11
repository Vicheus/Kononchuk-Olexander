/**
 * Created by shura on 11.03.17.
 */
//task 1
document.write("<h3>Exercise 1</h3>");
var num_A = 20,
    num_B = 46,
    sum = 0,
    sumEven = 0,
    i;
for (i = num_A; i <= num_B; i++) {
    sum += i;
    if (i % 2 !== 0) {
        sumEven += i;
    }
}
document.write('<p>Summ of all digits between ' + num_A + ' and ' + num_B + ' = ' + sum + '</p>');
document.write('<p>Summ of all even digits between ' + num_A + ' and ' + num_B + ' = ' + sumEven + '</p>');

//task 2
document.write("<h3>Exercise 2</h3>");
var deliveryVariants = 1,
    n = 10;
do {
    deliveryVariants *= n;
    n--;
} while (n > 0);
document.write('<p>Delivery could be provided in ' + deliveryVariants + '  variants</p>');

//task 3
document.write("<h3>Exercise 3</h3>");
var aster = '*',
    whitespace = '&nbsp',
    j,
    z = 5;
  //rectangle
document.write("<p>Rectangle</p>");
for (i = 0; i < z; i++) {
    for (j = 0; j < z; j++) {
        document.write(aster + whitespace);
    }
    document.write("</br>");
}
  //triangle
document.write("<p>Triangle</p>");
for (i = 0; i < z; i++) {
    for (j = i; j >= 0; j--) {
        document.write(aster + whitespace);
    }
    document.write("</br>");
}
  //equilateral triangle
document.write("<p>Equilateral triangle</p>");
for (i = 0; i < z; i++) {
    for (j = i; j < z; j++) {
        document.write(whitespace + whitespace);
    }
    for (j = i; j >= 0; j--) {
        document.write(aster + whitespace + whitespace);
    }
    document.write("</br>");
}
  //rhomb
document.write("<p>Rhomb</p>");
for (i = 0; i < z; i++) {
    for (j = i; j < z; j++) {
        document.write(whitespace + whitespace);
    }
    for (j = i; j >= 0; j--) {
        document.write(aster + whitespace + whitespace);
    }
    document.write("</br>");
}
for (i = 1; i < z; i++) {
    for (j = i; j >= 0; j--) {
        document.write(whitespace + whitespace);
    }
    for (j = i; j < z; j++) {
        document.write(aster + whitespace + whitespace);
    }
    document.write("</br>");
}