const mongoose = require('mongoose');
require('dotenv/config.js')

const connectToDb = () => {
  mongoose.connect(
    process.env.DB_CONNECTION_URI, 
    { useNewUrlParser: true, useUnifiedTopology: true }, 
    () => console.log('DB connection success...')
  );
}




module.exports = connectToDb;