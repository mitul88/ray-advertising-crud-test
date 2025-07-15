const productRouter = require("./product.routes");

module.exports = (app) => {
  app.use("/api/v1/products", productRouter);
};
