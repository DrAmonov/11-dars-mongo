require("express-async-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const routes = require("../routes");

const modules = (app) => {
  app.use(express.json());
  app.use(cookieParser());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(express.static(process.cwd() + "/public"));
  app.use("/uploads", express.static(process.cwd() + "/uploads"));
  app.set("view engine", "ejs");
  app.use(fileUpload());
  app.use(routes);
  app.use((err, req, res, next) => {
    console.log(err.message);
    res.redirect("/");
  });
};

module.exports = modules;
