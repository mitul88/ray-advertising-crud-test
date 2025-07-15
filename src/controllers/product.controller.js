const fs = require("fs");
const path = require("path");
const {
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  FAILED_MESSAGES,
} = require("../constant/messages");

const rootDirectory = process.cwd();
const dbPath = path.join(rootDirectory, "/db/data.json");

module.exports.create = async (req, res) => {
  const bodyData = await req.body;
  const newId = crypto.randomUUID();
  const id = newId.split("-").join("");

  const newProduct = { id, ...bodyData };
  try {
    const data = fs.readFileSync(dbPath, "utf-8");
    const jsonData = JSON.parse(data);
    jsonData.push(newProduct);
    fs.writeFileSync(dbPath, JSON.stringify(jsonData));
    return res
      .status(201)
      .send({ message: SUCCESS_MESSAGES.PRODUCT_CREATED, data: newProduct });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ message: ERROR_MESSAGES.INTERNAL_SERVER_ERROR });
  }
};
module.exports.allProducts = async (req, res) => {
  try {
    const data = fs.readFileSync(dbPath, "utf-8");
    const jsonData = JSON.parse(data);
    return res
      .status(200)
      .send({ message: SUCCESS_MESSAGES.PRODUCT_FETCHED, data: jsonData });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ message: ERROR_MESSAGES.INTERNAL_SERVER_ERROR });
  }
};
module.exports.viewProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const data = fs.readFileSync(dbPath, "utf-8");
    const jsonData = JSON.parse(data);
    const product = jsonData.find((item) => {
      return item.id === id;
    });
    return res.status(200).send({
      message: product
        ? SUCCESS_MESSAGES.PRODUCT_FETCHED
        : FAILED_MESSAGES.PRODUCT_NOT_FOUND,
      data: product,
    });
  } catch (error) {
    return res
      .status(500)
      .send({ message: ERROR_MESSAGES.INTERNAL_SERVER_ERROR });
  }
};
module.exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const data = fs.readFileSync(dbPath, "utf-8");
    const jsonData = JSON.parse(data);
    const products = jsonData.filter((item) => {
      return item.id !== id;
    });
    fs.writeFileSync(dbPath, JSON.stringify(products));
    return res.status(200).send({ message: SUCCESS_MESSAGES.PRODUCT_DELETED });
  } catch (error) {
    return res
      .status(500)
      .send({ message: ERROR_MESSAGES.INTERNAL_SERVER_ERROR });
  }
};
module.exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  const bodyData = await req.body;
  try {
    const data = fs.readFileSync(dbPath, "utf-8");
    const jsonData = JSON.parse(data);
    const product = jsonData.find((item) => {
      return item.id === id;
    });
    product["title"] = bodyData["title"];
    product["description"] = bodyData["description"];
    fs.writeFileSync(dbPath, JSON.stringify(jsonData));
    return res
      .status(200)
      .send({ message: SUCCESS_MESSAGES.PRODUCT_UPDATED, data: product });
  } catch (error) {
    return res
      .status(500)
      .send({ message: ERROR_MESSAGES.INTERNAL_SERVER_ERROR });
  }
};
