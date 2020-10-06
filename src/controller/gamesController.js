const games = require("../model/games.json")

const getGames = (request, response) => {
  response.status(200).send(games)
}

const getGamesById = (request, response) => {
  const id = request.params.id
  const game = games.find(game => game.id == id)
  if (game) {
      response.status(200).send(game)
  } else {
      response.status(404).send("Jogo não encontrado.")
  }
}

module.exports = {
  getGames,
  getGamesById
}