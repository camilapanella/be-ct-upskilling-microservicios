const { response } = require("../utils");
const Film = require("../data");

module.exports = async (req, res) => {
  const newFilm = await Film.create(req)
  response(res, 201, newFilm);
};