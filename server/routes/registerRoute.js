'use strict';

const { Router } = require('express')
const router = Router()

const registerCtrl = require('../controllers/registerCtrl')
router.post('/register', registerCtrl.registerNewUser)

module.exports = router