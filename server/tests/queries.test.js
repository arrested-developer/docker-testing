const test = require("tape");
const { initDb, getDb, closeDb } = require("../src/database/dbConnection");
const {
  deleteAllTypes,
  buildTestTypes,
} = require("../src/database/dbTestBuild");
const findAllCheeses = require("../src/database/queries/findAllCheeses");

console.log("node env", process.env.NODE_ENV);
// Put database setup in a test, Tape will wait until this
// test has ended before running the next one
test("database setup", t => {
  initDb().then(db => {
    deleteAllTypes(db)
      .then(buildTestTypes(db))
      .then(closeDb)
      .then(() => t.end());
  });
});

// in each test, we initialise a new connection to make sure that the
// previous test has completed. If we see a console warning that the
// database was already initialised, we know that more than one test
// is trying to connect to the database at once.

test("async test 1", t => {
  // state how many test assertions will be made
  t.plan(1);
  // open new db connection for these tests
  initDb().then(db => {
    //put tests here, using db returned from initDb promise
    findAllCheeses(db)
      .then(cheeses => {
        t.equal(cheeses.length, 2, "cheeses array has length 2");
        //t.end();
      })
      .then(closeDb);
  });
});

test("async test 2", t => {
  // state how many assertions will be made
  t.plan(2);
  // open new db connection for these tests
  initDb().then(db => {
    //put test assertions here, using db returned from initDb promise
    findAllCheeses(db)
      .then(cheeses => {
        t.equal(cheeses[0].name, "brie", "first cheese is named brie");
        t.equal(cheeses[1].name, "cheddar", "second cheese is named cheddar");
        //t.end();
      })
      .then(closeDb);
  });
});
