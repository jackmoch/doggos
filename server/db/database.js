'use strict';

const mongoose = require('mongoose')
const MONGODB_URL = 'mongodb://kima:griggs@ds047166.mlab.com:47166/doggos'

mongoose.Promise = Promise

module.exports.connect = () => mongoose.connect(MONGODB_URL)