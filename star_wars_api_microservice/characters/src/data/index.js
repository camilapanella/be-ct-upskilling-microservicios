const characters = require("./characters.json");
const axios = require("axios");

module.exports = {
  list: async () => {
    const characters = await axios.get("http://database:8004/Character");
    return characters.data;
  },
  create: async (req) => {
    const data = req.body;
    const newCharacter = await axios.post(
      "http://database:8004/Character",
      data
    );
    return newCharacter.data;
  },
  get: async (req) => {
    const { id } = req.params;
    const character = await axios.get(`http://database:8004/Character/${id}`);
    return character.data
  },
};
