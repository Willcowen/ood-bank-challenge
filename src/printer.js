const client = require('./client.js')

class Printer {
    
    constructor (transactions) {
        this.transactions = transactions
    }

    printStatement() {
        const lines = []
        lines.push(`\nDate       || Credit || Debit || Balance`)
        for (const transaction of this.transactions) {
            lines.push(`${transaction.date} || ${transaction.credit}   || ${transaction.debit}     || ${transaction.balance}`)
        }
    
    return lines.join("\n")
    }
}

module.exports = Printer