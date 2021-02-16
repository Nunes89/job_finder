const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

router.post("/add", (req, res) => {
  let { title, salary, company, description, email, new_job } = req.body;

  Job.create({
    title,
    salary,
    company,
    description,
    email,
    new_job,
  })
    .then(() => {
      res.redirect("/");
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
