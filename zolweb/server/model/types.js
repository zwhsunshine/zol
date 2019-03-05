const mongoose = require('mongoose');
const Types = require('../schema/types');
module.exports = mongoose.model('types',Types);
