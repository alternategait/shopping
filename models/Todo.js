const mongoose = require('mongoose') // require mongoose which allows for the schema

const FragranceProductSchema = new mongoose.Schema({ // make a constructor called TodoSchema it is a new mongoose schema
  type: { // first feild (key) called todo
    type: String, // its type is a string
    required: false, // and it is required
  },
  name: { // first feild (key) called todo
    type: String, // its type is a string
    required: true, // and it is required
  },
  brand: { // first feild (key) called todo
    type: String, // its type is a string
    required: true, // and it is required
  }, 
  "scent type": { // first feild (key) called todo
    type: String, // its type is a string
    required: true, // and it is required
  },
  likes: { // first feild (key) called todo
    type: Int32, // its type is a string
    default: 0,
    required: true, // and it is required
  },

})

module.exports = mongoose.model('FragranceProduct', FragranceProductSchema) // export this as Todo and TodoSchema for use by other files
