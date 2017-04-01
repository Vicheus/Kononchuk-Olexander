'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by shura on 18.03.17.
 */
var Human = function Human(gender) {
    this.gender = gender;
    this.greet = function () {
        return "I am ";
    };
};

var man = new Human('male');

var woman = new Human('female');

var CON = 11;

var Test = function () {
    function Test(a) {
        _classCallCheck(this, Test);

        this._a = a;
    }

    _createClass(Test, [{
        key: 'foo',
        value: function foo() {
            console.log(this._a);
        }
    }, {
        key: 'a',
        get: function get() {
            return 'This is our A = ' + this._a;
        }
    }]);

    return Test;
}();

var test = new Test(a);

var a = 10;

var b = 22;

var z = b;

console.log("My name is Shura");
console.log("Hi");