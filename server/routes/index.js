'use strict';

const { Router } = require('express')
const router = Router()

router.use(require('./registerRoute'))

module.exports = router