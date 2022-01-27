const bank = require('./bank.js')

class Client {

    constructor () {
        this.account = new bank()
    }

    openAccount(date) {
        this.account.date = date
        return this.account
    }

    makeDeposit(num, date) {
        this.account.credit += num
        this.account.balance += num
        this.account.date = date
    }
    makeWithdrawal(num, date) {
        this.account.debit = this.account.debit += num
        this.account.balance -= num
        this.account.date = date
    }

    showAccount() {
        return this.account
    }

}

module.exports = Client