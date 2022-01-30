class Transactions {
    constructor (date, credit = 0, balance = 0, debit = 0) {
        this.balance = balance + this.credit - this.debit
        this.credit = credit
        this.debit = debit
        this.date = date
    }

}

module.exports = Transactions