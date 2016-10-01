'use strict';

const User = require('../models/user')

module.exports.registerNewUser = ({ body : { username, password }}, res, err) => {
	User
		.findOneByUsername(username)
			.then(user => {
				if(user) {
					res.json({ msg: 'User already exists'})
				} else {
					User
						.create({
							username: username,
							password: password
						})
						.then((user) => {
							res.json({ username: username})
						})
				}
			})
}