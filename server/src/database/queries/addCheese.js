function addCheese(db, name) {
  return db.collection("types").insertOne({ name: name });
}

module.exports = addCheese;
