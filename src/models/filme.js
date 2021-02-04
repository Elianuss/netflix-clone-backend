const mongoose = require('mongoose');

const Filme = mongoose.model("Filme", {
  titulo: String,
  tipo: String,
  capa: String,
  logo: String,
  logoMobile: String,
  thumb: String,
  descricao: String,
  elenco: Array,
  generos: Array,
  cenas_momentos: Array
});

module.exports = Filme;