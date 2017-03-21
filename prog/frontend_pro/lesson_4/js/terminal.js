/**
 * Created by shura on 20.03.17.
 */

function newTransaction() {

        let type = parseInt(prompt("Please choose transaction: 1 - input cash, 2 - get cash," +
            " 3 - last transaction, 4 - list of all transactions")),
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
                typeId: type,
                cash: Math.abs(cash),
                date: (new Date()).toDateString()
            }
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
        this.balance += transaction.cash;
    },
    getCash: function (transaction) {
        if (this.balance >= transaction.cash) {
            this.transactions.push(transaction);
            this.balance -= transaction.cash;
        } else {
            alert("Your balance = " + this.balance + " less than you want to get");
        }

    },
    lastTransaction: function () {
        if (this.transactions.length) {
            for (let val in this.transactions[this.transactions.length - 1]) {
                console.log("<p>" + val + ": " + this.transactions[this.transactions.length - 1][val] + "</p>");
            }
            console.log("<p>balance: " + this.balance + "</p>");
        } else {
            console.log("<p>There is no previous executed transactions</p>");
        }
    },
    allTransactions: function () {
        if (this.transactions.length) {
            for (let i = 0; i < this.transactions.length; i++) {
                for (let val in this.transactions[i]) {
                    console.log("<p>" + val + ": " + this.transactions[i][val] + "</p>");
                }
            }
        } else {
            console.log("<p>There is no previous executed transactions</p>");
        }
        console.log("<p>balance: " + this.balance + "</p>");
    }
};

let privat = Object.create(terminal);
privat.transactions = [];
privat.balance = null;

let todo = true;
while (todo) {
    let currentTransaction = newTransaction();
    createTransaction(currentTransaction);
    todo = confirm("Do you want to continue?");
}

console.log(privat);
