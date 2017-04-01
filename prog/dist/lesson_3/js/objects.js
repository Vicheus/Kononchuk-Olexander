"use strict";

//var obj = {};
// var CONST = {
//     name: 'default name',
//     age: 'default age'
// };
//
// var user = new Object();
// user.name = 'Alex';
// user['age'] = 21;
//
// user['user name'] = user.name;
// console.log(user['user name'] + ' ' + user.age);
//
// var key = prompt('key'), value = prompt('value');
//
// var result = {};
// result[key] = value; //dynamical set up key of the object
//
// var newUser = {
//     name: 'Alex',
//     age: 27,
//     'user proffession': 'frontend developer'
// };
//
// var admin = {
//     name: 'admin',
//     stuff: [user]
// };
// //objects copied by link - like an arrays
// console.log(newUser, admin);
// console.log('name' in admin);//true if name exists in object admin or false if does not exists
//
// for (var keys in user) {
//     console.log(keys, user[keys]);//перебор значений обьекта
// }
//
// var dataBase = {
//     users: [
//         {
//             name: 'Alex',
//             age: 27
//         },
//         {
//             name: 'John',
//             age: 35
//         },
//         {
//             name: 'Pet',
//             age: 22
//         }
//     ],
//     total_ages: 0,
//     maxAgeUser: null,
//     minAgeUser: null,
//     names: []
// };
//
// dataBase.maxAgeUser = dataBase.users[0].age;
// dataBase.minAgeUser = dataBase.users[0].age;
// for (var i = 0; i < dataBase.users.length; i++) {
//     var name = dataBase.users[i].name,
//         age = dataBase.users[i].age,
//         item = dataBase.users[i];
//
//     dataBase.total_ages += age;
//     if (dataBase.minAgeUser > age) {
//         dataBase.minAgeUser = item;
//     }
//     if (dataBase.maxAgeUser < age) {
//         dataBase.maxAgeUser = item;
//     }
//     dataBase.names.push(name);
// }
//
// console.log(dataBase);
//
// var customObj = {};
//
// Object.defineProperty(customObj, 'name', {
//     value: 'FROM DEFINED PROPERTY',
//     writable: false,
//     enumerable: false,
//     configurable: false
// });
//
// Object.defineProperties(customObj, {
//     age: {
//         value: 30
//     },
//     surname: {
//         value: 'Lennon'
//     }
// });
//
// var newUser_1 = {
//     name: 'Alex',
//     age: 27,
//     'user proffession': 'frontend developer'
// };
//
// var copy = {};
// for (i in newUser_1) {
//     newUser_1[i] = copy;
//}
//
// var obj = {};
//
// console.log(obj instanceof Object);
//
//
// var someFunc = function () {
//     console.log('from some func');
// };
//
// function summ(x, y) {
//     return double(x) + double(y);
// }
//
// function double(x) {
//     return x * x;
// }
//
// var result = summ(2, 78);
//
// var name = 'GLOBAL';
//
// function changeName() {
//     name = 'LOCAL';
// }
//
// changeName();
// console.log(name); // LOCAL
//
// function log() {
//     console.log( arguments ); //псевдо массив со всеми аргументами переданними в функцию
// }
/////////////////////////////////////////
document.write("<h1>Zoo</h1>");

var zoo = {
    herbal: [],
    predator: []
};

function getAnimalData() {
    var name = prompt("Вид:"),
        type = prompt("Травоядний?"),
        // +/-
    date = new Date();

    return {
        name: name,
        isHerbal: type === '+',
        date: date.toString()
    };
}

var todo = true;

while (todo) {
    if (todo) {
        var animal = getAnimalData();
        animal.isHerbal ? zoo.herbal.push(animal) : zoo.predator.push(animal);

        console.log(zoo);
    }
    todo = confirm('Are you want to add animal?');
}