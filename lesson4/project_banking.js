function makeAccount(number) {
  let balance = 0;
  let transactions = [];
  
  return {
    deposit(amount) {
      balance += amount;
      transactions.push({type: 'deposit', amount: amount});
      return amount;
    },
  
    withdraw(amount) {
      if (amount > balance) {
        amount = this.difference;
      }
  
      transactions.push({type: 'withdraw', amount: amount});
      balance -= amount;
      return amount;
    },

    balance() {
      return balance;
    },

    number() {
      return number;
    },

    transactions() {
      return transactions;
    }
  }
}


function makeBank() {
  let acctNumber = 101;
  let accounts =  [];
  
  return {
    openAccount() {
      let newAccount = makeAccount(acctNumber);
      accounts.push(newAccount);
      acctNumber += 1;
      return newAccount;
    },

    transfer(source, destination, amount) {
      source.withdraw(amount);
      destination.deposit(amount);
      return amount;
    },
  }
}


let bank = makeBank();
console.log(bank.accounts);
// undefined
