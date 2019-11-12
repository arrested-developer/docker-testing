function findCheese(db, name) {
  return db.collection("types").findOne({ name: name });
}

module.exports = findCheese;
