const bank = require('./bank.js')

class Client {

    constructor () {
        this.account = new bank()
        this.transactions = []
    }

    openAccount(date) {
        this.account.date = date
        return this.account
    }

    makeDeposit(num, date) {
        const transaction = {
           credit: this.account.credit += num,
           balance: this.account.balance += num,
           date: this.account.date = date,
           debit: this.account.debit
        }
        this.transactions.push(transaction)
        console.log(transaction)
    }
    makeWithdrawal(num, date) {

        const transaction = {
        credit: this.account.credit,
        balance: this.account.balance -= num,
        date: this.account.date = date,
        debit: this.account.debit += num
        }
        this.transactions.push(transaction)
        console.log(transaction)
    }

    showAccount() {
        return this.account
    }

    showTransactions() {
        return this.transactions
    }


}

module.exports = Client