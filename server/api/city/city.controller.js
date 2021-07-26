import cityService from './city.service';

export default function cityController() {
  /**
   * Returns the json document with city temperature data
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   * @param {Function} next - Next middleware function
   * @return {JSON} JSON document that represents the cities with their temperature data (min, max, avg and last)
   */
  const getCities = async (req, res, next) => {
    try {
      const cities = await cityService().getCities();
      return res.json(cities);
    } catch (err) {
      return next(err);
    }
  };

  /**
   * Adds a new city in the db
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   * @param {Function} next - Next middleware function
   * @return {JSON} JSON document that represents newly added city
   */
  const addCity = async (req, res, next) => {
    try {
      const city = await cityService().addCity(req.body.name);
      return res.json(city);
    } catch (err) {
      return next(err);
    }
  };

  /**
   * Removes a city from the db
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   * @param {Function} next - Next middleware function
   * @return {JSON} JSON document that represents the city removed
   */
  const removeCity = async (req, res, next) => {
    try {
      const city = await cityService().removeCity(req.params.id);
      return res.json(city);
    } catch (err) {
      return next(err);
    }
  };

  /**
   * Stores current temperature and current timestamp to the cities stored in the db
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   * @param {Function} next - Next middleware function
   * @return {JSON} JSON document that represents updated cities
   */
  const getTemperatureData = async (req, res, next) => {
    try {
      const data = await cityService().storeTemperature();

      return res.json(data);
    } catch (err) {
      return next(err);
    }
  };
  return { getCities, addCity, removeCity, getTemperatureData };
}
