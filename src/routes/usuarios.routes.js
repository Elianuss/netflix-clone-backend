const express = require('express');
const router = express.Router();
const Usuario = require("../models/usuario");

router.post('/login', async (req, res) => {
  try {
    const credentials = req.body
    const usuario = await Usuario.findOne(credentials);

    if (usuario){
      res.json({ error: false, usuario })
    } else {
      res.json({ error: true, mensagem: "Nenhum usuário encontrado." });
    }

  } catch(err) {
    res.json({ error: true, mensagem: err.message })
  }
});

module.exports = router;