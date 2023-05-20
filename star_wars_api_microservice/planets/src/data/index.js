const axios = require("axios");

module.exports = {
  list: async () => {
    const planets = await axios.get("http://database:8004/Planet");
    return planets.data;
  },
  create: async (req) => {
    const data = req.body;
    const newPlanet = await axios.post(
      "http://database:8004/Planet",
      data
    );
    return newPlanet.data;
  },
  get: async (req) => {
    const { id } = req.params;
    const planet = await axios.get(`http://database:8004/Planet/${id}`);
    return planet.data
  },
};