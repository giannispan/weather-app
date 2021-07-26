import mongoose from 'mongoose';
import { expect } from 'chai';
import config from '../../config/config';
import cityService from '../../api/city/city.service';

describe('Cities service', () => {
  before(async () => {
    await mongoose.connect(config.mongo.uri, config.mongo.options.db);
  });

  it('should return an array of cities', async () => {
    const cities = await cityService().getCities();

    expect(cities).to.be.an('array');
  });

  after(async () => {
    await mongoose.disconnect();
  });
});
