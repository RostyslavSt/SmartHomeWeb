const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const getCurrentTime = require('../utils/getCurrentTime');

const notificationSchema = new Schema({
  time: {
    type: Date,
    required: true,
    default: Date.now
  },
  text: {
    type: String,
    required: true
  },
  viewed: {
    type: Boolean,
    required: true,
    default: false
  },
  emergency: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Notification', notificationSchema);
