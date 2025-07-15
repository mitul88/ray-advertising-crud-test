const { FAILED_MESSAGES } = require("../constant/messages");

module.exports.productDetailsValidation = async (req, res, next) => {
  const bodyData = await req.body;
  if (!bodyData["title"] || !bodyData["description"]) {
    return res
      .status(400)
      .send({ message: FAILED_MESSAGES.INFORMATION_MISSING });
  }
  next();
};

module.exports.checkIdParam = async (req, res, next) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).send({ message: FAILED_MESSAGES.MISSING_ID_PARAM });
  }
  next();
};
