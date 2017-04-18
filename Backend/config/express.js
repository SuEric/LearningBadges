import cors from 'cors';
import helmet from 'helmet';
import logger from 'morgan';
import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import compress from 'compression';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';
import expressWinston from 'express-winston';
import routes from '../learning_badges/routes';
import config from './env';
import winstonInstance from './winston';
import { JwtStrategy } from './passport';

// Create the express app
const app = express();

if (config.env === 'development') {
  app.use(logger('dev'));
}

/* Configure Helmet to add express basic protection */
app.use(helmet());
app.use(helmet.noCache());
app.use(helmet.noSniff());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.ieNoOpen());

/* Disable x-powered by as recommended by express docs */
app.disable('x-powered-by');

// parse body params and attach them to req.body on HTTP requests/response
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// the cookie parser
app.use(cookieParser());

// enable compression
app.use(compress());

// enable method-override
app.use(methodOverride());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// Passport JWT config
app.use(passport.initialize());
JwtStrategy(passport);

// Set the API routes
app.use(routes);

// enable detailed API logging in dev env
if (config.env === 'development') {
  expressWinston.requestWhitelist.push('body');
  expressWinston.responseWhitelist.push('body');
  app.use(expressWinston.logger({
    winstonInstance,
    meta: true, // optional: log meta data about request (defaults to true)
    msg: 'HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms',
    colorStatus: true, // Color the status code (default green, 3XX cyan, 4XX yellow, 5XX red).
  }));
}

// log error in winston transports except when executing test suite
if (config.env !== 'test') {
  app.use(expressWinston.errorLogger({
    winstonInstance,
  }));
}

// Change promise library
mongoose.Promise = global.Promise;

// Connect with database
mongoose.connect(`${config.database.client}://${config.database.connection.host}/${config.database.connection.database}`);

export default app;
