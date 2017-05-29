import { Application } from 'express';
import examplesRouter from './api/controllers/examples/router'
export default function routes(app: Application): void {
  app.use('<%= apiRoot %>/examples', examplesRouter);
};