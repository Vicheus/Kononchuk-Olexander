/**
 * Created by shura on 18.03.17.
 */
let Human = function ( gender ) {
    this.gender = gender;
    this.greet = function () {
        return "I am ";
    };
};

let man = new Human( 'male' );

let woman = new Human( 'female' );

const CON = 11;




class Test {
    constructor( a ){
        this._a = a;
    }

    foo(){
        console.log( this._a );
    }

    get a(){
        return `This is our A = ${this._a}`;
    }

}

let test = new Test( a );

let a = 10;

let b = 22;

let z = b;

console.log("My name is Shura");
console.log("Hi");

