class Transactions {
    constructor (date, credit, debit, balance) {
        this.credit = credit
        this.debit = debit
        this.balance = balance + this.credit - this.debit
        this.date = date
    }

}

module.exports = Transactions