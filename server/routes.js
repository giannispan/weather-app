import citiesRouter from './api/city';

export default function routes(app, express) {
  app.use('/api/cities/', citiesRouter(express));
}
