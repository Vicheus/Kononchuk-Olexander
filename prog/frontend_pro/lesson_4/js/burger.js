/**
 * Created by shura on 24.03.17.
 */
const burgerSize = {
    'small': {
        'price': 50,
        'cal': 20
    },
    'large': {
        'price': 100,
        'cal': 40
    }
};

const burgerFilling = {
    'cheese': {
        'price': 10,
        'cal': 20
    },
    'salad': {
        'price': 20,
        'cal': 5
    },
    'potato': {
        'price': 15,
        'cal': 10
    }
};

const burgerTopping = {
    'mayonnaise': {
        'price': 20,
        'cal': 5
    },
    'flavour': {
        'price': 15,
        'cal': 0
    }
};

class Burger {

    constructor() {
        this._size = null;
        this._filling = [];
        this._topping = [];
    }

    get size() {
        return this._size;
    }

    set size(val) {
        this._size = val;
    }

    get filling() {
        return this._filling;
    }

    set filling(val) {
        this._filling.push(val);
    }

    get topping() {
        return this._topping;
    }

    set topping(val) {
        this._topping.push(val);
    }

     calculatePrice() {
        let summ = this.size.price;
        for (let val of this.filling) {
            summ += val.price;
        }
        for (let val of this.topping) {
            summ += val.price;
        }

        return summ;
    }

     calculateCal() {
        let cal = this.size.cal;
        for (let val of this.filling) {
            cal += val.cal;
        }
        for (let val of this.topping) {
            cal += val.cal;
        }

        return cal;
    }
}

let customBurger = new Burger();
let chosenSize;
    do {
        chosenSize = prompt("Please choose size of your burger - small or large");
        if (burgerSize.hasOwnProperty(chosenSize)) {
            customBurger.size = burgerSize[chosenSize];
            break;
        } else if (chosenSize !== null)  {
            alert("Wrong input");
        }
    } while (chosenSize);
if (chosenSize) {
    let chosenFilling;
    do {
        chosenFilling = prompt("Please choose filling of your burger - cheese, salad or potato");
        if (burgerFilling.hasOwnProperty(chosenFilling)) {
            customBurger.filling = burgerFilling[chosenFilling];
        } else if (chosenFilling !== null) {
            alert("Wrong input");
        }
    } while (chosenFilling);
    let chosenTopping;
    do {
        chosenTopping = prompt("Please choose filling of your burger - mayonnaise or flavour");
        if (burgerTopping.hasOwnProperty(chosenTopping)) {
            customBurger.topping = burgerTopping[chosenTopping];
        } else if (chosenTopping !== null)  {
            alert("Wrong input");
        }
    } while (chosenTopping);

    let cost = customBurger.calculatePrice();
    let cal = customBurger.calculateCal();

    document.write("<p>Price is: " + cost + "</p>");
    document.write("<p>Calories are: " + cal + "</p>");
} else {
    document.write("<p>You haven\'t chosen any burger</p>");
}






