const { Op } = require("sequelize");
const db = require("../models");

// create main model
const User = db.user;

//Get
const getUserLogin = (req, res) => {
  res.render("login");
};

//Post
const postUserLogin = async (req, res) => {
  const role = req.body.role;

  if (role == "teacher") {
    res.redirect("/teacher-index");
  } else {
    res.redirect("/student-index");
  }
};

module.exports = {
  getUserLogin,
  postUserLogin,
};
