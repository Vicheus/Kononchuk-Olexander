"use strict";

/**
 * Created by shura on 18.03.17.
 */
function greet(name) {
    console.log("Hello I am" + name);
}

greet('Alex');

function x() {
    var a = 10;
    return function () {
        console.log(++a);
    };
}

x()();

(function () {
    console.log("Hello");
})();