import axios from 'axios';
import { City } from './city.model';
import config from '../../config/config';

export default function cityService() {
  /**
   * Returns cities from mongo db
   * @return {Array} Array of objects with the cities with the virtual properties as defined in the City model
   */
  const getCities = async () => {
    const cities = await City.find({}).lean({ virtuals: true });
    if (!cities) {
      throw new Error('No cities found');
    }
    cities.forEach((city) => {
      city.data.sort((a, b) => a.updated - b.updated);
    });
    const data = cities.reduce((acc, item) => {
      acc.push({
        _id: item._id,
        name: item.name,
        min: item.minTemperature,
        max: item.maxTemperature,
        avg: item.avgTemperature,
        last: item.data.length ? [...item.data].pop().temperature : null
      });
      return acc;
    }, []);
    return data;
  };

  /**
   * Adds a new city in the db
   * @param {String} name - The name of the city
   * @return {Promise} The promise that represents the new inserted document
   */
  const addCity = async (name) => {
    const newCity = new City({ name });

    await newCity.save();
  };

  /**
   * Removes a city from the db
   * @param {ObjectId} id - The id of the city in the db
   * @return {Object} The object containing results of the operation
   */
  const removeCity = (id) => City.deleteOne({ _id: id });

  /**
   * Api call to get the current temperature for a given city
   * @param {String} name - The name of city
   * @return {JSON} The JSON response of the api
   */
  const apiCall = async (name) => {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${config.API_KEY}`
    );
    return response;
  };

  /**
   * Updates the cities stored in db with the current temperature and current timestamp
   * @param {ObjectId} id - The id of city in the db
   * @param {Object} - The fields to be updated
   * @return {Object} The object containing results of the operation
   */
  const storeTemperature = async () => {
    const cities = await getCities();

    await Promise.all(
      cities.map(async (city) => {
        const response = await apiCall(city.name);
        await City.updateOne(
          { _id: city._id },
          {
            $push: {
              data: {
                temperature: Math.round(response.data.main.temp),
                updated: Date.now()
              }
            }
          },
          { multi: true }
        );
      })
    );
  };

  return {
    getCities,
    addCity,
    removeCity,
    apiCall,
    storeTemperature
  };
}
