const Transaction = require('./Transaction.js')

class Client {

    constructor () {
        this.transactions = []
        this.balance = 0
    }


    makeDeposit(num, date) {
        if (num < 0) {
            return 'Cannot deposit a negative amount!'
        }
        this.transactions.push(new Transaction(date, num, 0, this.balance))
        this.balance += num
    }

    makeWithdrawal(num, date) {
        if (num < 0) {
            return 'Cannot withdraw a negative amount!'
        }
        this.transactions.push(new Transaction(date, 0, num, this.balance))
        this.balance -= num
        }


    showTransactions() {
        const lines = []
        for (const transaction of this.transactions) {
            lines.push(transaction)
        }
      return lines.join('\n')
    }

    showTransactions() {
        return this.transactions
    }

}

module.exports = Client