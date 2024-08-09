const mongoose = require('mongoose');
require('dotenv').config();

// Connection string with database name included
// const mongourl = process.env.mongdb_url_local;
const mongourl = process.env.MONGODB_URL;

mongoose.connect(mongourl, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('connected', () => {
  console.log('Connected to MongoDB server successfully');
});

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
  console.log('MongoDB disconnected.');
});

module.exports = db;
