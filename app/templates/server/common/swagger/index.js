import middleware from 'swagger-express-middleware';
import * as path from 'path';

export default function (app, routes) {
  middleware(path.join(__dirname, 'Api.yaml'), app, (err, mw) => {
    // Enable Express' case-sensitive and strict options
    // (so "/entities", "/Entities", and "/Entities/" are all different)
    app.enable('case sensitive routing');
    app.enable('strict routing');

    app.use(mw.metadata());
    app.use(mw.files({
      // Override the Express App's case-sensitive 
      // and strict-routing settings for the Files middleware.
      caseSensitive: false,
      strict: false,
    }, {
      useBasePath: true,
      apiPath: process.env.SWAGGER_API_SPEC,
      // Disable serving the "Api.yaml" file
      // rawFilesPath: false
    }));

    app.use(mw.parseRequest({
      // Configure the cookie parser to use secure cookies
      cookie: {
        secret: process.env.SESSION_SECRET,
      },
      // Don't allow JSON content over 100kb (default is 1mb)
      json: {
        limit: process.env.REQUEST_LIMIT,
      },
    }));

    // These two middleware don't have any options (yet)
    app.use(
      mw.CORS(),
      mw.validateRequest());

    // Error handler to display the validation error as HTML
    app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars, no-shadow
      res.status(err.status || 500);
      res.send(
        `<h1>${err.status || 500} Error</h1>` +
        `<pre>${err.message}</pre>`);
    });

    routes(app);
  });
}
