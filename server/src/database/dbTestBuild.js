const { types } = require("./dummyData");

function deleteAllTypes(db) {
  return db.collection("types").deleteMany({});
}

function buildTestTypes(db) {
  return db.collection("types").insertMany(types);
}

module.exports = { deleteAllTypes, buildTestTypes };
