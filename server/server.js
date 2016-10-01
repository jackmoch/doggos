'use strict';

const express = require('express')
const { json } = require('body-parser')
const routes = require('../server/routes/')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 3000

app.set('port', port)

app.use(express.static('client'))
app.use(json())

app.use(routes)

// app.use((req, res) =>
//   res.sendFile(process.cwd() + '/client/index.html')
// )

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})