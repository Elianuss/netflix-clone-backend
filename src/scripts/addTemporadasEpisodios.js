const database = require('../services/database');
const Filme = require('../models/filme');
const Temporada = require('../models/temporada');
const Episodio = require('../models/episodio');

const addTemporadasEpisodios = async () => {
  try {
    const series = await Filme.find({ tipo: 'serie' }).select('_id');
    for (let serie of series) {
      console.log(`Série: ${serie.titulo}`);
      const numTemporadas = Math.floor(Math.random() * 5) + 1
      for(let i = 1; i <= numTemporadas; i++) {
        console.log(`Inserindo temporada ${i} de ${numTemporadas}`);
        const temporada = await new Temporada({
          filme_id: serie._id,
          titulo: `Temporada ${i}`
        }).save();

        const numEpisodios = Math.floor(Math.random() * 5) + 1
        for(let x = 1; x <= numEpisodios; x++) {
          console.log(`Inserindo episódio ${x} de ${numEpisodios}`);
          await new Episodio({
            temporada_id: temporada._id,
            titulo: `Episódio ${x}`,
            numero: x,
            descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
            capa: "https://picsum.photos/300/200"
          }).save();
        }
      }
    }
    console.log("processo concluído");
  } catch (err) {
    console.log(err.message);
  }
};

addTemporadasEpisodios();