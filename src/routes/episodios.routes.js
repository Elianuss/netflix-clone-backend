const express = require('express');
const router = express.Router();
const Episodio = require("../models/episodio");

router.get('/temporada/:temporada', async(req, res) => {
  try {
    const temporadaId = req.params.temporada
    const episodios = await Episodio.find({
      temporada_id: temporadaId
    })
    res.json({ error: false, episodios });

  } catch(err) {
    res.json({ error: true, mensagem: err.message });
  }
});

module.exports = router;