module.exports = {
    index(req, res, next) {
        let listaServiços = ["Banho e Tosa", "Castração", "PetHotel"]
      res.send("Os serviços disponíveis são: " + listaServiços);
    },
  } 