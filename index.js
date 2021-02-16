const express = require("express");
const app = express();
const port = 3000;
const db = require("./db/connection");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

db.authenticate()
  .then(() => {
    console.log("Database successfully connected.");
  })
  .catch((error) => {
    console.log("There was an error connecting to the database. ", error);
  });

app.get("/", (req, res) => res.send("Hello World!"));

app.use("/jobs", require("./routes/jobs"));

app.listen(port, () => console.log(`Server is running on port ${port}!`));
