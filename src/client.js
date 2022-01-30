const Transaction = require('./Transactions.js')

class Client {

    constructor (balance = 0) {
        this.transactions = []
        this.balance = balance
    }


    makeDeposit(num, date) {
        if (num < 0) {
            return 'Cannot deposit a negative amount!'
        }
        this.transactions.push(new Transaction(date, num, this.balance))
        this.balance += num
    }


    makeWithdrawal(num, date) {
        if (num < 0) {
            return 'Cannot withdraw a negative amount!'
        }
        this.transactions.push(new Transaction(date, 0, this.balance, num))
        this.balance -= num
        }
    

    showAccount() {
        return this.account
    }

    showTransactions() {
        return this.transactions
    }


}

module.exports = Client