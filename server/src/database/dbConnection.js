require("dotenv").config();
const url = require("url");
const client = require("mongodb").MongoClient;

// set the database url , including the database name, from the
// environment variables.

let dbUrl;

if (process.env.NODE_ENV === "test") {
  dbUrl = process.env.MONGO_URI_TEST;
} else {
  dbUrl = process.env.MONGO_URI;
}

if (!dbUrl) throw new Error("Mongo URI not set");

const dbConfig = { useNewUrlParser: true, useUnifiedTopology: true };

let _client;
let _db;

function initDb() {
  return new Promise((resolve, reject) => {
    if (_db) {
      console.warn("Database already connected, use getDb");
      resolve(_db);
    } else {
      client.connect(dbUrl, dbConfig, (err, client) => {
        if (err) {
          reject(err);
        } else {
          _client = client;
          _db = client.db();
          resolve(_db);
        }
      });
    }
  });
}

// return the database connection so it can be passed into queries
function getDb() {
  if (!_db) throw new Error("Database has not been initialised");
  return _db;
}

// close the database connection - necessary for our tests so they don't hang forever
// with an open connection
function closeDb() {
  // remove the assignment to existing db connection
  _db = null;
  // close the connection
  return _client.close();
}

module.exports = { initDb, getDb, closeDb };
