const Transaction = require("../src/Transaction.js");
const Client = require("../src/client.js");
const Printer = require("../src/printer.js");

const dateString = new Date('2012, 01, 10').toLocaleDateString()
const dateStringTwo = new Date('2012, 01, 13').toLocaleDateString()
const dateStringThree = new Date('2012, 01, 14').toLocaleDateString()

const transactions = [
  new Transaction(dateStringThree, 0, 500, 3000),
  new Transaction(dateStringTwo, 2000, 0, 1000),
  new Transaction(dateString, 1000, 0, 0)
  ]

describe("Bank", () => {
  let client

  beforeEach(() => {
    client = new Client();
  });
  //TEST ONE
  it("adding a transaction", () => {
    const expected = [new Transaction(dateString, 1000, 0, 0)]
    client.makeDeposit(1000, dateString) //make a deposit on this account 
    expect(client.showTransactions()).toEqual(expected);
  });
  //TEST TWO
  it("Adding two transactions", () => {
    //setup
    const expected = [new Transaction(dateString, 1000, 0, 0), new Transaction(dateString, 2000, 0, 1000)]
    client.makeDeposit(1000, dateString)
    client.makeDeposit(2000, dateString)
    expect(client.showTransactions()).toEqual(expected);
  });
  //TEST THREE
  it("depositing a negative amount returns an error", () => {
    expected = 'Cannot deposit a negative amount!'
    result = client.makeDeposit(-2000, dateStringTwo)
    expect(result).toEqual(expected);
  });
  //TEST FOUR
  it("making a withdrawal of 500", () => {
    //setup
    const expected = [new Transaction(dateString, 0, 500, 0)] 
    //execute
    client.makeWithdrawal(500, dateString)
    //verify
    expect(client.showTransactions()).toEqual(expected);
  });
  //TEST FIVE
  it("withdrawing a negative amount returns an error", () => {
    expected = 'Cannot withdraw a negative amount!'
    const result = client.makeWithdrawal(-500, dateStringThree)
    //verify
    expect(result).toEqual(expected);
  });
  //TEST SIX
  it("Printer: Printing an empty statement", () => {
    //setup 
    let printer = new Printer([])
    result = printer.printStatement()
    //execute 
    const expected = 
    '\nDate       || Credit || Debit || Balance'
    //verify
    expect(result).toEqual(expected);
  });
  //TEST SEVEN
  it("Printer: Printing a statement", () => {
    //setup 
    let printer = new Printer(transactions)
    result = printer.printStatement()
    //execute 
    const expected = 
    '\nDate       || Credit || Debit || Balance'
    + '\n14/01/2012 || 0   || 500     || 2500'
    + '\n13/01/2012 || 2000   || 0     || 3000'
    + '\n10/01/2012 || 1000   || 0     || 1000'
    //verify
    expect(result).toEqual(expected);
  });
  
})