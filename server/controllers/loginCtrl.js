'use strict';

const User = require('../models/user')

module.exports.logInUser = ({ session, body : { username, password }}, res, err) => {
	User
		.findOneByUsername(username)
		.then((user) => {
			if(user) {
				return Promise.all([
					user,
					user.comparePassword(password)
				])
			} else {
				res.json({ msg: 'User not found'})
			}
		})
		.then(([user, matches]) => {
			if(matches) {
				session.user = user
				console.log(session)
				res.json({ user: matches, msg: 'You logged in successfully'})
			} else {
				res.json({ msg: 'Password does not match' })
			}
		})
}

// const localStrategy = new Strategy(
//   {
//     usernameField: 'username',
//     passwordField: 'password',
//   },
//   (username, password, cb) =>
//     User.findOneByEmail(username)
//       .then(user => {
//         if (user) {
//           return Promise.all([
//             user,
//             user.comparePassword(password),
//           ])
//         }

//         cb(null, null, { msg: 'User does not exist in our system' })
//       })
//       .then(([user, matches]) => {
//         if (matches) {
//           cb(null, user, { msg: 'Successfully logged in' })
//         } else {
//           cb(null, null, { msg: 'Password does not match' })
//         }
//       })
//       .catch(cb)
// )
