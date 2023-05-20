const { response } = require("../utils");
const Character = require("../data");

module.exports = async (req, res) => {
  const newCharacter = await Character.create(req)
  response(res, 201, newCharacter);
};
