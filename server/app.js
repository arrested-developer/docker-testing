const express = require("express");
const { initDb, getDb } = require("./src/database/dbConnection");
const router = require("./src/handlers");

const app = express();

initDb()
  .then(console.log("Database initialised"))
  .catch(err => console.error("Database could not be initialised"));

app.use(express.static("public"));

app.use(router);

const port = process.env.PORT || 4321;

app.listen(port, () => {
  console.log(`listening on port ${port} 👂🏻`);
});
