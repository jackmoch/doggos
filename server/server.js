'use strict';

const express = require('express')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const { json } = require('body-parser')
const routes = require('../server/routes/')
const mongoose = require('mongoose')
const { connect } = require('./db/database')
const {red} = require('chalk')

const app = express()
const port = process.env.PORT || 3000

app.set('port', port)

// Middlewares
app.use(session({
  store: new RedisStore({
    url: process.env.REDIS_URL || 'redis://localhost:6379'
  }),
  secret: 'doggo'
}))

app.use(express.static('client'))
app.use(json())

app.use('/api',routes)

// app.use((req, res) =>
//   res.sendFile(process.cwd() + '/client/index.html')
// )

// Error handling middleware
app.use((
    err,
    { method, url, headers: { 'user-agent': agent } },
    res,
    next
  ) => {

    if (process.env.NODE_ENV === 'production') {
      res.sendStatus(err.status || 500)
    } else {
      res.set('Content-Type', 'text/plain').send(err.stack)
    }

    const timeStamp = new Date()
    const statusCode = res.statusCode
    const statusMessage = res.statusMessage

    console.error(
      `[${timeStamp}] "${red(`${method} ${url}`)}" Error (${statusCode}): "${statusMessage}"`
    )
    console.error(err.stack)
  }
)

connect()
	.then(() => {
		app.listen(port, () => {
			console.log(`Listening on port ${port}`)
		})
	})
	.catch(console.error)