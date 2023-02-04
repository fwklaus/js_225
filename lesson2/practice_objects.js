let invoices = {
  unpaid: [],
  paid: [],

  add: function(name, amount) {
    this.unpaid.push({
      name,
      amount
    });
  },

  totalDue: function() {
    return this.unpaid.reduce((total, name) => total + name.amount, 0);
  },

  payInvoice: function (invoice) {
    let unpaid = [];

    for (let i = 0; i < this.unpaid.length; i++) {
      if (this.unpaid[i].name === invoice) {
        this.paid.push(this.unpaid[i]);
      } else {
        unpaid.push(this.unpaid[i]);
      }
    }

    this.unpaid = unpaid;
  },

  totalPaid: function() {
    return this.paid.reduce((total, name) => total + name.amount, 0);
  }
}

invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);

console.log(invoices.totalDue()); // 737.50

invoices.payInvoice('Slough Digital');
invoices.payInvoice('Due North Development');
console.log(invoices.totalPaid()); // 550
console.log(invoices.totalDue()); // 187.50
