const { response } = require("../utils");
const Planet = require("../data");

module.exports = async (req, res) => {
  const newPlanet = await Planet.create(req)
  response(res, 201, newPlanet);
};