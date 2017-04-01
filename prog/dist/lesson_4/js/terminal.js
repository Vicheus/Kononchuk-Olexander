"use strict";

/**
 * Created by shura on 20.03.17.
 */

function newTransaction() {

    var type = parseInt(prompt("Please choose transaction: 1 - input cash, 2 - get cash," + " 3 - last transaction, 4 - list of all transactions")),
        cash = null;
    if ([1, 2, 3, 4].indexOf(type) === -1) {
        alert("You have input wrong operation type");
    } else {
        if (type === 1 || type === 2) {
            cash = parseFloat(prompt("Please input cash value"));
            if (typeof cash !== 'number') {
                alert("Please input cash value in format of number");
            }
        }

        return {
            type: type,
            cash: Math.abs(cash),
            date: new Date().toDateString()
        };
    }
}

function createTransaction(transaction) {
    for (var key in transaction) {
        if (key === 'type') {
            switch (transaction[key]) {
                case 1:
                    privat.addCash(transaction);
                    break;
                case 2:
                    privat.getCash(transaction);
                    break;
                case 3:
                    privat.lastTransaction(transaction);
                    break;
                case 4:
                    privat.allTransactions(transaction);
                    break;
            }
        }
    }
}

var terminal = {
    addCash: function addCash(transaction) {
        transaction.type = 'input';
        this.transactions.push(transaction);
        this.balance += transaction.cash;
    },
    getCash: function getCash(transaction) {
        if (this.balance >= transaction.cash) {
            transaction.type = 'output';
            this.transactions.push(transaction);
            this.balance -= transaction.cash;
        } else {
            alert("Your balance = " + this.balance + " less than you want to get");
        }
    },
    lastTransaction: function lastTransaction(transaction) {
        this.outprint.push("<h5>Outprint last transaction" + transaction.date + "</h5>");
        if (this.transactions.length) {
            for (var val in this.transactions[this.transactions.length - 1]) {
                this.outprint.push("<p>" + val + ": " + this.transactions[this.transactions.length - 1][val] + "</p>");
            }
            this.outprint.push("<h5>Current balance: " + this.balance + "</h5>");
            this.outprint.push("------------------------------------------");
        } else {
            this.outprint.push("<p>There is no previous executed transactions</p>");
            this.outprint.push("<hr>");
        }
    },
    allTransactions: function allTransactions(transaction) {
        this.outprint.push("<h5>Outprint all transactions" + transaction.date + "</h5>");
        if (this.transactions.length) {
            for (var i = 0; i < this.transactions.length; i++) {
                for (var val in this.transactions[i]) {
                    this.outprint.push("<p>" + val + ": " + this.transactions[i][val] + "</p>");
                }
                this.outprint.push("<hr>");
            }
            this.outprint.push("<h5>Current balance: " + this.balance + "</h5>");
        } else {
            this.outprint.push("<p>There is no previous executed transactions</p>");
            this.outprint.push("<hr>");
        }
    },
    print: function print() {
        document.write(this.outprint.join(""));
    }
};

var privat = Object.create(terminal);
privat.transactions = [];
privat.outprint = [];
privat.balance = null;

var todo = true;
while (todo) {
    var currentTransaction = newTransaction();
    createTransaction(currentTransaction);
    todo = confirm("Do you want to continue?");
}
privat.print();

console.log(privat);