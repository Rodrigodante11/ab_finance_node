// mongose eh um banco nosql == orientado a documento
// mong no terminal para instartar o mongo
const mongoose = require('mongoose')

const uri = 'mongodb://localhost/db_finance'
const options = {
    useMongoClient: true,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
  };
  module.exports = mongoose.connect(uri, options);
  //module.exports = mongoose.connect('mongodb://localhost/db_finance')