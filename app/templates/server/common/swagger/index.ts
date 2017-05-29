import * as middleware from 'swagger-express-middleware';
import { Application } from 'express';
import * as path from 'path';

export default function (app: Application, routes: (app: Application) => void) {
  middleware(path.join(__dirname, 'Api.yaml'), app, function(err, middleware) {

    // Enable Express' case-sensitive and strict options
    // (so "/entities", "/Entities", and "/Entities/" are all different)
    app.enable('case sensitive routing');
    app.enable('strict routing');

    app.use(middleware.metadata());
    app.use(middleware.files(app, {
      apiPath: process.env.SWAGGER_API_DOCS_ROOT,
    }));

    app.use(middleware.parseRequest({
      // Configure the cookie parser to use secure cookies
      cookie: {
        secret: process.env.SESSION_SECRET
      },
      // Don't allow JSON content over 100kb (default is 1mb)
      json: {
        limit: process.env.REQUEST_LIMIT
      }
    }));

    // These two middleware don't have any options (yet)
    app.use(
      middleware.CORS(),
      middleware.validateRequest());

    // Error handler to display the validation error as HTML
    app.use(function (err, req, res, next) {
      res.status(err.status);
      res.send(
        '<h1>' + err.status + ' Error</h1>' +
        '<pre>' + err.message + '</pre>'
      );
    });

    routes(app);
  });
}
