const AbstractManager = require("./AbstractManager");

class FormationsManager extends AbstractManager {
  constructor() {
    super({ table: "formations" });
  }

  findAll() {
    return this.database.query(`select title from ${this.table}`);
  }

  find(id) {
    return this.database.query(`select title from ${this.table} where id = ?`, 
      [id]
    );
  }


}

module.exports = FormationsManager;
