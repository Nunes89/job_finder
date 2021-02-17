const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const handlebars = require("express-handlebars");
const db = require("./db/connection");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static(path.join(__dirname, "public")));

db.authenticate()
  .then(() => {
    console.log("Database successfully connected.");
  })
  .catch((error) => {
    console.log("There was an error connecting to the database. ", error);
  });

app.get("/", (req, res) => res.render("index"));

app.use("/jobs", require("./routes/jobs"));

app.listen(port, () => console.log(`Server is running on port ${port}!`));
