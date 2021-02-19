const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

router.get("/add", (req, res) => {
  res.render("add");
});

router.get("/view/:id", (req, res) => {
  Job.findOne({
    where: {id: req.params.id}
  }).then((job) =>{
    res.render("job_view", {job});
  }
  ).catch((error) => console.log(error))
});

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
