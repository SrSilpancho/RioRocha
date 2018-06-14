import express from 'express';
import marcadorRoutes from './components/Marcador/marcador.api';

const router = express.Router();
router.use('/v1', marcadorRoutes);

export default router;
