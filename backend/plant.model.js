const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Plant = new Schema({

  square: {
    type: Number
  },
  plant_name: {
    type: String
  },
  plant_number: {
    type: Number
  },
  plant_planting_date: {
    type: Date
  },
   plant_flowering_date:{
     type: Date
   },
  plant_description: {
    type: String
  }

});

module.exports = mongoose.model('Plant', Plant);
