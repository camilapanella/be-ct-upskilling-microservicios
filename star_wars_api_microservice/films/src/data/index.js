const axios = require("axios");

module.exports = {
  list: async () => {
    const films = await axios.get("http://database:8004/Film");
    return films.data;
  },
  create: async (req) => {
    const data = req.body;
    const newFilm = await axios.post(
      "http://database:8004/Film",
      data
    );
    return newFilm.data;
  },
  get: async (req) => {
    const { id } = req.params;
    const film = await axios.get(`http://database:8004/Film/${id}`);
    return film.data
  },
};