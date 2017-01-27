import express from 'express';
import dotenv from 'dotenv';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as http from 'http';
import * as os from 'os';
import cookieParser from 'cookie-parser';
import swaggerify from './swagger';
import Logger,{configure} from 'bunyan-node-logger';
dotenv.config();
configure({
  appId: process.env.APP_ID,
  level: process.env.LOG_LEVEL
});

const app = new express();

export default class ExpressServer {
  constructor() {
    this._l = new Logger(this.constructor.name);
    const root = path.normalize(__dirname + '/../..');
    app.set('appPath', root + 'client');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cookieParser(process.env.SESSION_SECRET));
    app.use(express.static(`${root}/public`));
  }

  router(routes) {
    swaggerify(app, routes)
    return this;
  }

  listen(port = process.env.PORT) {
    const welcome = (port, msg) => () => this._l.info(msg,
      `up and running in ${process.env.NODE_ENV || 'development'} @: ${os.hostname() } on port: ${port}}`);
    http.createServer(app).listen(port, welcome(port));
    return app;
  }
}