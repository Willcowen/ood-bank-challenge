    class BankAccount {
        constructor (date) {
            this.balance = 0
            this.credit = 0
            this.debit = 0
            this.date = date
        }

    withdraw (num) {
        this.debit + num
        return this.balance - num
    }

    deposit (num) {
        this.credit = this.credit + num
        this.balance = this.balance + num
    }

    getBalance() {
        return this.balance
    }
}

module.exports = BankAccount