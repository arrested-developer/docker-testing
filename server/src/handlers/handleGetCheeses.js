const { getDb } = require("../database/dbConnection");
const findAllCheeses = require("../database/queries/findAllCheeses");

function handleGetCheeses(req, res) {
  const db = getDb();
  findAllCheeses(db).then(cheeseList => res.send(cheeseList));
}

module.exports = handleGetCheeses;
