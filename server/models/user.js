'use strict';

const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
})

userSchema.statics.findOneByUsername = function(username, cb) {
	const collection = this
	return collection.findOne({username}, cb)
}

module.exports = mongoose.model('User', userSchema)