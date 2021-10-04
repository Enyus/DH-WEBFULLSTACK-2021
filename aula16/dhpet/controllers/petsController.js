module.exports = {
    index(req, res, next) {
        let listaPets = ["Cachorro", "Gato", "Papagaio", "Cobra"]
      res.send(listaPets);
    },
    fav(req, res, next) {
        let {fav} = req.params
        res.send("O seu animal favorito é o " + fav)
    },
  } 