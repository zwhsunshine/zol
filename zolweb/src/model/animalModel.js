const mongoose = require('mongoose');
const Animal = require('../schema/animalSchema');
module.exports = mongoose.model('animal',Animal);