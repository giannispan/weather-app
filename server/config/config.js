export default {
  ip: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 1234,
  API_KEY: process.env.API_KEY || '9bc4bbc08690c88e0caf8914e5b99717',
  mongo: {
    uri: process.env.MONGO_URL || 'mongodb://localhost:27017/cities',
    options: {
      db: {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
      }
    }
  }
};
