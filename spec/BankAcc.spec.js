const Transaction = require("../src/Transactions.js");
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
  it("making a deposit of £1000", () => {
    client.makeDeposit(1000, dateString) //make a deposit on this account - update credit and balance.
    expect(client.balance).toEqual(1000);
  });
  //TEST TWO
  it("making a second Deposit of £2000", () => {
    //setup 
    client.makeDeposit(2000, dateStringTwo)
    expect(client.balance).toEqual(2000);
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
    client.makeDeposit(1000, dateString) 
    //execute
    client.makeWithdrawal(500, dateStringThree)
    //verify
    expect(client.balance).toEqual(500);
  });
  //TEST FIVE
  it("withdrawing a negative amount returns an error", () => {
    expected = 'Cannot withdraw a negative amount!'
    const result = client.makeWithdrawal(-500, dateStringThree)
    //verify
    expect(result).toEqual(expected);
  });
  it("stores transactions", () => {
    expected = [new Transaction(dateString, 500, 500), new Transaction(dateStringTwo, 1000, 500), new Transaction(dateStringThree, 0, 500, 500)]
    client.makeDeposit(500, dateString)
    client.makeDeposit(1000, dateStringTwo)
    client.makeWithdrawal(500, dateStringThree)
    result = client.showTransactions()
    expect(result).toEqual(expected)
});
  // it("printing a simple transaction", () => {
  //   //setup 
  //   client.openAccount(dateString) 
  //   client.makeDeposit(4000, dateString)
  //   printer.addTransaction()
  //   //execute 
  //   const expected = "10/01/2012 || 1000.00 ||        || 1000.00"
  //   //verify
  //   expect(result).toEqual(expected);
  // });
  

})