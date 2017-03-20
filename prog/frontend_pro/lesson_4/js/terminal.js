/**
 * Created by shura on 20.03.17.
 */

function newTransaction() {

        let type = +prompt("Please choose transaction: 1 - input cash, 2 - get cash," +
            " 3 - last transaction, 4 - list of all transactions"),
            value;
        switch (type) {
            case 1:
                value = +prompt("Please input value of cash");
                if (typeof value === 'number') {
                    return {
                        typeId: 1,
                        type: 'input',
                        value: Math.abs(value),
                        date: (new Date()).toDateString()
                    }
                } else {
                    value = +prompt("Please input value of cash");
                }
                break;
            case 2:
                value = +prompt("Please input value of cash");
                if (typeof value === 'number') {
                    return {
                        typeId: 2,
                        type: 'output',
                        value: Math.abs(value),
                        date: (new Date()).toDateString()
                    }
                } else {
                    value = +prompt("Please input value of cash");
                }
                break;
            case 3:
                return {
                    typeId: 3,
                    type: "print last transaction",
                    date: (new Date()).toDateString()
                };
                break;
            case 4:
                return {
                    typeId: 4,
                    type: "print all transactions",
                    date: (new Date()).toDateString()
                };
                break;
            default:
                alert("You have input wrong operation type");

        }
    }

function createTransaction(transaction) {
    for (let key in transaction) {
        if (key === 'typeId') {
            switch (transaction[key]) {
                case 1:
                    privat.addCash(transaction);
                    break;
                case 2:
                    privat.getCash(transaction);
                    break;
                case 3:
                    privat.lastTransaction();
                    break;
                case 4:
                    privat.allTransactions();
                    break;
            }
        }
    }
}


let terminal = {
    addCash: function (transaction) {
        this.transactions.push(transaction);
    },
    getCash: function (transaction) {
        for (let i = this.transactions.length - 1; i >= 0; i--) {
            if (this.transactions[i].value && this.transactions[i].value >= transaction.value) {
                transaction.value = this.transactions[i].value - transaction.value;
                this.transactions.push(transaction);
                break;
            } else {
                alert("Your balance less than you want to get");
            }
        }
    },
    lastTransaction: function () {
        (this.transactions[this.transactions.length - 1]) ?
            document.write("<p>" + this.transactions[this.transactions.length - 1] + "</p>") :
            document.write("<p>There is no previous transactions</p>");
    },
    allTransactions: function () {
        for (let i = 0; i < this.transactions.length; i++) {
            for (let key in this.transactions[i]) {
                (this.transactions[i][key]) ?
                    document.write("<p>" + this.transactions[i][key] + "</p>") :
                    document.write("<p>There is no previous transactions</p>");
            }
        }
    }
};

let privat = Object.create(terminal);
privat.transactions = [];

let todo = true;
while (todo) {
    let currentTransaction = newTransaction();
    createTransaction(currentTransaction);
    todo = confirm("Do you want to continue?");
}

console.log(privat);
