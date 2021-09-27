const mongoose = require('mongoose');

// Update below to match your own MongoDB connection string.
const MONGO_URL = process.env.MONGO_URL || "mongodb+srv://nasa-api:5P9ROVdXkMDuA03f@nasacluster.himhc.mongodb.net/nasa?retryWrites=true&w=majority";


mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};