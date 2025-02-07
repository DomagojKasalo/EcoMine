const mongoose = require('mongoose');

const BlockLogSchema = new mongoose.Schema({
  hash: {
    type: String,
    required: true,
    unique: true,
  },
  height: {
    type: Number,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
  difficulty: {
    type: Number,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  transactionCount: {
    type: Number,
    required: true,
  },
  hashRate: {
    type: String, 
    required: true,
  },
  energyConsumption: {
    type: String, 
    required: true,
  },
  co2Impact: {
    type: String, 
    required: true,
  },
}, { timestamps: true }); 

const BlockLog = mongoose.model('BlockLog', BlockLogSchema);

module.exports = BlockLog;
