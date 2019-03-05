const mongoose = require('mongoose');
const SNav = require('../schema/nav');
module.exports = mongoose.model('snav',SNav);