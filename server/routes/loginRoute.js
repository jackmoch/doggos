'use strict';

const { Router } = require('express')
const router = Router()

const loginCtrl = require('../controllers/loginCtrl')
router.post('/login', loginCtrl.logInUser)

module.exports = router