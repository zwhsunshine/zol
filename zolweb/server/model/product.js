const mongoose = require('mongoose');
const Product = require('../schema/product');
module.exports = mongoose.model('product',Product);