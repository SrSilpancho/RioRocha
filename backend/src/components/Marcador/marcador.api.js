import express from 'express';
import httpStatus from 'http-status';
import marcadorModel from './marcador.model';
import MarcadorDal from './marcador.dal';

const router = express.Router();
const marcador = new MarcadorDal(marcadorModel);

router.get('/marcadores', (req, res) => {
  marcador.findAll()
    .then((marcadorFound) => {
      res.status(httpStatus.OK).send(marcadorFound);
    })
    .catch((error) => {
      const httpStatusError = httpStatus.INTERNAL_SERVER_ERROR;
      res.status(httpStatusError).send(error.message);
    });
});

router.post('/marcadores', (req, res) => {

  const newMarcador = {
    fecha:req.body.fecha,
    latitud:req.body.latitud,
    longitud: req.body.longitud,
    oxigenoDisuelto:req.body.oxigenoDisuelto,
    nitratos:req.body.nitratos,
    pH:req.body.pH,
    T:req.body.T,
    solidosTotales:req.body.solidosTotales,
    fosforoTotal:req.body.fosforoTotal,
    turbiedad:req.body.turbiedad,
    conductividad:req.body.conductividad,
    dureza:req.body.dureza,
    alcalinidad:req.body.alcalinidad
  }
  marcador.create(newMarcador)
    .then((createMarcador) => {
      res.status(httpStatus.CREATED).send(createMarcador);
    })
    .catch((error) => {
      const httpStatusError = httpStatus.INTERNAL_SERVER_ERROR;
      res.status(httpStatusError).send(error.message);
    });
});

router.get('/marcadores/:_id', (req, res) => {
  const marcadorId = req.params._id;
  marcador.findOneById(marcadorId)
    .then((marcadorFound) => {
      res.status(httpStatus.FOUND).send(marcadorFound);
    })
    .catch((error) => {
      const httpStatusError = httpStatus.INTERNAL_SERVER_ERROR;
      res.status(httpStatusError).send(error.message);
    });
});


router.delete('/marcadores/:_id', (req, res) => {
  const marcadorId = req.params._id;
  marcador.deleteOne(marcadorId)
    .then((deleted) => {
      res.status(httpStatus.OK).send(`Marcador ${deleted} deleted!!!`);
    })
    .catch((error) => {
      const httpStatusError = httpStatus.INTERNAL_SERVER_ERROR;
      res.status(httpStatusError).send(error.message);
    });
});

router.patch('/marcadores/:_id', (req, res) => {
  const marcadorId = req.params._id;
  const newMarcador = req.body;
  marcador.updateOne(marcadorId, newMarcador)
    .then(() => {
      res.status(httpStatus.OK).send(`Marcador ${marcadorId} updated!!!`);
    })
    .catch((error) => {
      const httpStatusError = httpStatus.INTERNAL_SERVER_ERROR;
      res.status(httpStatusError).send(error.message);
    });
});

export default router;
