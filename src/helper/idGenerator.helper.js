module.exports.generateId = () => {
  const newId = crypto.randomUUID();
  return newId.split("-").join("");
};
