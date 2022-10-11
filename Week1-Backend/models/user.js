const db = require("../utils/connection");

module.exports = class Bill {
  constructor(net, bill, total) {
    this.net = net;
    this.bill = bill;
    this.total = total;
  }

  static find(id) {
    return db.execute("SELECT * FROM bills WHERE id = ?");
  }

  static save(bill) {
    return db.execute("INSERT INTO bills (net, bill, total) VALUE (?,?,?)", [
      bill.net,
      bill.bill,
      bill.total,
    ]);
  }
};
