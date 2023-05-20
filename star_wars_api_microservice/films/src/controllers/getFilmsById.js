const Film = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const film = await Film.get(req);
  response(res, 200, film);
};