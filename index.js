const express = require("express");
const app = express();
const port = 3000;
const db = require("./db/connection");

db.authenticate()
  .then(() => {
    console.log("Database successfully connected.");
  })
  .catch((error) => {
    console.log("There was an error connecting to the database. ", error);
  });

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Server is running on port ${port}!`));
