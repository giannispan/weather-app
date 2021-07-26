import cityController from './city.controller';

export default function citiesRouter(express) {
  const router = express.Router();

  // get stored cities
  router.get('/', cityController().getCities);

  // get cities temperature data
  router.get('/check', cityController().getTemperatureData);

  // add new city
  router.post('/', cityController().addCity);

  // remove city
  router.delete('/:id', cityController().removeCity);

  return router;
}
