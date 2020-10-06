const games = require("../model/games.json")

const getGames = (request, response) => {
  response.status(200).send(games)
}

module.exports = {
  getGames
}