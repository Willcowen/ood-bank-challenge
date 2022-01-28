const Bank = require("../src/bank.js");
const Client = require("../src/client.js");
const Printer = require("../src/printer.js");

const dateString = new Date('2012, 01, 10').toLocaleDateString()
const dateStringTwo = new Date('2012, 01, 13').toLocaleDateString()
const dateStringThree = new Date('2012, 01, 14').toLocaleDateString()

const transaction1 = { credit: 1000, balance: 1000, date: '10/01/2012', debit: 0 }
const transaction2 = { credit: 3000, balance: 3000, date: '13/01/2012', debit: 0 }
const transaction3 = { credit: 3000, balance: 2500, date: '14/01/2012', debit: 500 }

describe("Bank", () => {
  let client
  let printer

  beforeEach(() => {
    client = new Client();
  });
  it("opening a new bank account", () => {
    //setup 
    const expected = new Bank(dateString)
    //execute 
    const result = client.openAccount(dateString)
    //verify
    expect(result).toEqual(expected);
  });
  it("making a deposit of £1000", () => {
    //setup 
    client.openAccount(dateString) // open new account with balance set to zero.
    client.makeDeposit(1000, dateString) //make a deposit on this account - update credit and balance.
    const result = client.showAccount()//return object with updated balance and credit
    //execute 
    const expected = new Bank(dateString)
    expected.balance = 1000
    expected.credit = 1000
    //verify
    expect(result).toEqual(expected);
  });
  it("making a second Deposit of £2000", () => {
    //setup 
    client.openAccount(dateString) 
    client.makeDeposit(2000, dateStringTwo)
    const result = client.showAccount()
    //execute 
    const expected = new Bank(dateStringTwo)
    expected.balance = 2000
    expected.credit = 2000
    //verify
    expect(result).toEqual(expected);
  });
  it("making a withdrawal of 500", () => {
    //setup 
    client.openAccount(dateString) 
    client.makeDeposit(1000, dateString) 
    client.makeDeposit(2000, dateStringTwo)
    client.makeWithdrawal(500, dateStringThree)
    const result = client.showAccount()
    //execute 
    const expected = new Bank(dateStringThree)
    expected.balance = 2500
    expected.credit = 3000
    expected.debit = 500
    //verify
    expect(result).toEqual(expected);
  });
  it("Returning an array of transactions", () => {
    //setup 
    client.openAccount(dateString) 
    client.makeDeposit(1000, dateString)
    client.makeDeposit(2000, dateStringTwo)
    client.makeWithdrawal(500, dateStringThree)
    const result = client.showTransactions()
    //execute 
    const expected = [transaction1, transaction2, transaction3]
    //verify
    expect(result).toEqual(expected);
  });
  it("printing a simple transaction", () => {
    //setup 
    client.openAccount(dateString) 
    client.makeDeposit(4000, dateString)
    const transactionArray = client.showTransactions()
    const result = new Printer(transactionArray)
    //execute 
    const expected = []
    //verify
    expect(result).toEqual(expected);
  });
  

})