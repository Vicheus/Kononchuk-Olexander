'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Created by shura on 16.03.17.
 */
// var user = {
//     name: 'Alex',
//     age: 30,
//     getName: function () {
//         console.log( this.getName() );
//     },
//     setName: function (value) {
//         this.name = value;
//         console.log('name was changed');
//     }
// };
//
// function getGlobal(a, b) {
//     console.log( this );
// }
//
// getGlobal.call(user, 123, 'abc');// user + integer + string
// getGlobal.apply(user, [123, 'abc']);// user + array
//
// console.log(Math.max.apply(null, [1, 2, 4, 37, 3, 1]));
//
// getGlobal();// window
//
// var getName = function () {
//     console.log( this.name );
// };
//
// var user1 = {
//     name: 'User1'
// };
//
// var user2 = {
//     name: 'User2'
// };
//
// getName.call(user1);// User1
// getName.call(user2);// User2
//
// var user3 = {
//     name: 'User3',
//     getName: function () {
//         console.log( this.name );
//     }
// };
//
// var user4 = {
//     name: 'User4'
// };
//
// user3.getName();// User3
// user3.getName.call(user4);// User4
//
// var bindedFunction = user3.getName.bind(user4);// works like apply but not execute a function, so you need extra step to execute this function
//
// var user5 = {
//     name: 'User5',
//     getName: function () {
//         console.log( this.name );
//     },
//     setName: function (value) {
//         this.name = value;
//     }
// };
//
// var user6 = Object.create(user5);// inheritance
//
// user6.name = 'User6';
//
// user6.getName();// User6
// user6.setName('New User6');
// user6.getName();// New User6
//
var userModel = function userModel(name, age) {
    var date1 = new Date();
    return {
        name: name,
        age: age,
        date: date1.toLocaleTimeString()
    };
};

var methods = {
    add: function add(user) {
        this.data.push(user);
        console.log(user);
    },
    remove: function remove(user) {
        var name = user.name;
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].name === name) {
                this.data.splice(i, 1);
            }
            console.log(this.data);
        }
    },
    editField: function editField($old, $new, field) {
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i][field] === $old) {
                this.data[i][field] = $new;
                break;
            }
        }
    },
    edit: function edit($old, $new) {
        if ((typeof $old === 'undefined' ? 'undefined' : _typeof($old)) === (typeof $new === 'undefined' ? 'undefined' : _typeof($new))) {
            var binded = this.editField.bind(this, $old, $new);
            if (typeof $old === 'number') {
                binded('age');
            } else {
                binded('name');
            }
        }
    }
};

var users = Object.create(methods);
users.data = [];

var alex = userModel("Alex", 27);
var john = userModel("John", 30);

users.add(alex);
users.add(john);
users.remove(john);
console.log(users);

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var result = arr.map(function (elem, index, arr) {
//     return elem + 2;
// });

var result = arr.filter(function (elem) {
    result(elem % 2 === 0);
});

var res = arr.find(function (elem) {
    return elem % 2 === 0;
});

console.log(arr.indexOf(res));

var ress = arr.every(function (elem) {
    return elem > 0;
}); // true if return all elements > 0

var ressu = arr.sum(function (elem) {
    return elem > 0;
}); // true if return at least one elements > 0

var ressult = arr.reduce(function (result, elem, index, arr) {
    console.log('result - ' + result, 'element - ' + elem);
    return result + elem;
});

var rreessuulltt = arr.filter(function (elem) {
    return elem % 2 === 0;
}).reduce(function (result, elem) {
    return result + elem;
});
console.log(rreessuulltt);