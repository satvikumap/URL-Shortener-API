const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function (v) {
        return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(v);
      },
      message: props => `${props.value} is not a valid URL!`
    }
  },
  shortId: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    index: true
  },
  clicks: {
    type: Number,
    default: 0,
    min: 0
  },
  lastAccessed: {
    type: Date,
    default: Date.now
  },
});

urlSchema.index({ shortId: 1 });
const URL = mongoose.model('Url', urlSchema);

module.exports = URL;
