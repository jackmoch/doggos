'use strict';

const User = require('../models/user')

module.exports.logInUser = ({ body : { username, password }}, res, err) => {
	User
		.findOneByUsername(username)
		.then((user) => {
			if(user) {
				return user.comparePassword(password)
			} else {
				res.json({ msg: 'User not found'})
			}
		})
		.then(matches => {
			if(matches) {
				res.json({ user: matches, msg: 'You logged in successfully'})
			} else {
				res.json({ msg: 'Password does not match' })
			}
		})
}