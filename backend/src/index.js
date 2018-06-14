import app from './express';
import config from './config';
import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/marcadores1');//Base de datos
app.listen(config.get('PORT'), () => console.info(`Server running on port ${config.get('PORT')}.`));

export default app;
