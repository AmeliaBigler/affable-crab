const { Schema, model } = require('mongoose');

const cropSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
// time planted
// location
});

const Crop = model('Crop', cropSchema);

module.exports = Crop;