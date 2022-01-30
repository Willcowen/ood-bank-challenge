const client = require('./client.js')

class Printer {
    
    constructor () {
        this.transactions = []
    }

    addTransaction(){
       const transactionsArray = client.showTransactions()
        for (let i = 0; i < transactionsArray.length; i++){
            this.transactions.push(transacationsArray[i])
        }
        return this.transactions
    }
    printStatement() {
        for (let i = 0; i < this.statement.length; i++) {
        console.log(this.statement[i])
        }
        return this.statement
    }
}

module.exports = Printer