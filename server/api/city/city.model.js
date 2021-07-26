import mongoose from 'mongoose';
import mongooseLeanVirtuals from 'mongoose-lean-virtuals';

const { Schema } = mongoose;

const CitySchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  data: [
    {
      temperature: {
        type: Number
      },
      updated: {
        type: Date,
        default: Date.now()
      }
    }
  ]
});

// Virtuals
CitySchema.virtual('minTemperature').get(function getMinTemperature() {
  return this.data.length
    ? this.data.reduce(
        (min, p) => (p.temperature < min ? p.temperature : min),
        this.data[0].temperature
      )
    : null;
});

CitySchema.virtual('maxTemperature').get(function getMaxTemperature() {
  return this.data.length
    ? this.data.reduce(
        (max, p) => (p.temperature > max ? p.temperature : max),
        this.data[0].temperature
      )
    : null;
});

CitySchema.virtual('avgTemperature').get(function getAvgTemperature() {
  return this.data.length
    ? Math.round(
        this.data.reduce((total, p) => total + p.temperature, 0) /
          this.data.length
      )
    : null;
});

CitySchema.plugin(mongooseLeanVirtuals);

const City = mongoose.model('City', CitySchema);

export { City };
