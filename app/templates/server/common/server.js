import Express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import http from 'http';
import os from 'os';
import l from './logger.js';<% if (specification === 'openapi_3') { %>
import OpenApiValidator from 'express-openapi-validator';
import errorHandler from '../api/middlewares/error.handler.js'
<% } else { %>
import oas from './swagger';
<% } %>
const app = new Express();

// Get dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default class ExpressServer {
  constructor() {
    const root = path.normalize(`${__dirname}/../..`);
<% if (specification === 'openapi_3') { %>
    const apiSpec = path.join(__dirname, 'api.yml');
    const validateResponses = !!(
      process.env.OPENAPI_ENABLE_RESPONSE_VALIDATION &&
      process.env.OPENAPI_ENABLE_RESPONSE_VALIDATION.toLowerCase() === 'true'
    );
<% } %>
    app.use(bodyParser.json({ limit: process.env.REQUEST_LIMIT || '100kb' }));
    app.use(bodyParser.urlencoded({ extended: true, limit: process.env.REQUEST_LIMIT || '100kb' }));
    app.use(bodyParser.text({ limit: process.env.REQUEST_LIMIT || '100kb'}));
    app.use(cookieParser(process.env.SESSION_SECRET));
    app.use(Express.static(`${root}/public`));
<% if (specification === 'openapi_3') { %>
    app.use(process.env.OPENAPI_SPEC || '/spec', Express.static(apiSpec));
    app.use(
      OpenApiValidator.middleware({
        apiSpec,
        validateResponses,
        ignorePaths: /.*\/spec(\/|$)/,
      })
    );
<% } %>
  }

  router(routes) {
<% if (specification === 'openapi_3') { %>
    routes(app)
    app.use(errorHandler)
    return this;
<% } else { %>
    this.routes = routes;
    return this;
<% } %>
  }

  listen(port = process.env.PORT) {
    const welcome = p => () =>
      l.info(
        `up and running in ${process.env.NODE_ENV ||
          'development'} @: ${os.hostname()} on port: ${p}}`
      );
<% if (specification === 'openapi_3') { %>
    http.createServer(app).listen(port, welcome(port));
<% } else { %>
    oas(app, this.routes).then(() => {
      http.createServer(app).listen(port, welcome(port));
    }).catch(e => {
      l.error(e);
      // eslint-disable-next-line no-process-exit
      process.exit(1)
    });
<% } %>
    return app;
  }
}
