const { getDb } = require("../database/dbConnection");
const addCheese = require("../database/queries/addCheese");

function handleAddCheese(req, res) {
  const db = getDb();
  addCheese(db, req.params.type)
    .then(res.send("added"))
    .catch(res.send("error adding cheese"));
}

module.exports = handleAddCheese;
