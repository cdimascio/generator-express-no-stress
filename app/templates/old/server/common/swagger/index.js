import middleware from 'swagger-express-middleware';
import * as path from 'path';
export default function (app, routes) {
  middleware(path.join(__dirname, 'Api.yaml'), app, function (err, middleware) {

    // Enable Express' case-sensitive and strict options
    // (so "/entities", "/Entities", and "/Entities/" are all different)
    app.enable('case sensitive routing');
    app.enable('strict routing');

    app.use(middleware.metadata());
    app.use(middleware.files({
      // Override the Express App's case-sensitive and strict-routing settings for the Files middleware.
      caseSensitive: false,
      strict: false
    }, {
      apiPath: process.env.SWAGGER_API_DOCS_ROOT,
      // Disable serving the "Api.yaml" file
      rawFilesPath: false
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
