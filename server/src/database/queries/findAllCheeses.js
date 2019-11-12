function findAllCheeses(db) {
  return db
    .collection("types")
    .find()
    .toArray();
}

module.exports = findAllCheeses;
