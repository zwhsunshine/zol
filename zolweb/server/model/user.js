const mongoose = require('mongoose');
const User = require('../schema/user');
module.exports = mongoose.model('user',User);