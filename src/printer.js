const client = require('./client.js')

class Printer {
    
    constructor (transactionsArray) {
        this.statement = transactions
    }


    printStatement() {
        console.table(this.statement)
        return this.statement
    }
}

module.exports = Printer