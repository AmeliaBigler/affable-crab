const { Schema, model } = require('mongoose');

const testSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
});

const Test = model('Test', testSchema);

module.exports = Test;