const router = require('express').Router()
const { regUser } = require('../controller/user')

router.post('/register', regUser)

module.exports = router
