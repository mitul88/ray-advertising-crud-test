const app = require("express")();
require("./middlewares")(app);
require("./routes")(app);

module.exports = app;
