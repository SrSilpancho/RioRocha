import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import compression from 'compression';
import methodOverride from 'method-override';
import helmet from 'helmet';
import cors from 'cors';

import config from './config';
import routes from './routes';


const app = express();

app.use(morgan(config.get('LOG_FORMAT')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
app.use(methodOverride());
app.use(helmet());
app.use(cors());

// Adding application routes
app.use('/api', routes);

export default app;
