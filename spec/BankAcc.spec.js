const Transaction = require("../src/Transaction.js");
const Client = require("../src/client.js");
const Printer = require("../src/printer.js");

const dateString = new Date('2012, 01, 10').toLocaleDateString()
const dateStringTwo = new Date('2012, 01, 13').toLocaleDateString()
const dateStringThree = new Date('2012, 01, 14').toLocaleDateString()

describe("Bank", () => {
  let client
  let printer = new Printer();

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
  it("Showing a statement", () => {
    //setup 
    client.makeDeposit(4000, dateString)
    client.makeDeposit(3000, dateStringTwo)
    result = client.showStatement()
    //execute 
    const expected = ""
    //verify
    expect(result).toEqual(expected);
  });
  
})