// all application level middleware
const express = require("express");

module.exports = (app) => {
  app.use(express.json());
};
