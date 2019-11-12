const { getDb } = require("../database/dbConnection");
const findCheese = require("../database/queries/findCheese");

function handleGetOneCheese(req, res) {
  const db = getDb();
  findCheese(db, req.params.type).then(cheese => res.send(cheese));
}

module.exports = handleGetOneCheese;
