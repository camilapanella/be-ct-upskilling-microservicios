const {ClientError} = require("../utils/errors")

module.exports = (req, res, next) => {
  const { model } = req.params;
  if (["Character", "Film", "Planet"].includes(model)) {
    next();
  } else throw new ClientError("Invalid model", 401);
};
