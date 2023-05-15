const { Schema, model } = require('mongoose');

const farmSchema = new Schema({
  length: {
    type: Number,
    required: true,
  },
  width: {
    type: Number,
    required: true,
  },
//   crops
});

const Farm = model('Farm', farmSchema);

module.exports = Farm;