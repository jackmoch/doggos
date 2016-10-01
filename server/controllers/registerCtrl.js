'use strict';

const User = require('../models/user')

module.exports.registerNewUser = ({ body : { username, password }}, res, err) => {
	User
		.findOneByUsername(username)
			.then(user => {
				if(user) {
					res.json({ msg: 'User already exists'})
				} else {
					Promise.resolve()
				}
			})
			.then(() => {
				User
					.create({ username, password })
					.then(() => res.json({ username: username }))
					.catch(err) 
			})
}