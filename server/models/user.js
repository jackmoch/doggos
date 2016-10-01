'use strict';

const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const BCRYPT_DIFFICULTY = 15

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	seen: [String]
})

userSchema.pre('save', function(cb) {
	const user = this
	bcrypt.hash(user.password, BCRYPT_DIFFICULTY, (err, hash) => {
		if(err) {
			return cb(err)
		} 
		user.password = hash
		cb()
	})
})

userSchema.methods.comparePassword = function(password, cb) {
	const user = this

  // Support callback and `Promise` pattern
  if (typeof cb === 'function') {
    return bcrypt.compare(password, user.password, cb)
  }

  return new Promise((resolve, reject) => {
	    bcrypt.compare(password, user.password, (err, matches) => {
	      err ? reject(err) : resolve(matches)
	    }
    )
  })
}

userSchema.statics.findOneByUsername = function(username, cb) {
	const collection = this
	return collection.findOne({username}, cb)
}

module.exports = mongoose.model('User', userSchema)