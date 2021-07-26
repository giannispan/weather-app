import express from 'express';
import mongoose from 'mongoose';
import config from './config/config';
import connectMongoDb from './config/db/connectMongo';
import expressConfig from './config/server/express';
import errorHandlingMiddleware from './middlewares/errorHandling.middleware';
import routes from './routes';

const app = express();

const server = require('http').Server(app);

// express headers setting and logging middleware
expressConfig(app);

server.listen(config.port, config.ip, () => {
  console.log(
    'Express server listening on %d, in %s mode',
    config.port,
    app.get('env')
  );
});

// establish connection to mongo
connectMongoDb(mongoose, config).connect();

// use routes
routes(app, express);

// error handling middleware
app.use(errorHandlingMiddleware);

export { app };
