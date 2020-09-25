const router = require('express').Router()
const { regUser, loginUser } = require('../controller/user')

router.post('/register', regUser)
router.post('/login', loginUser)

module.exports = router
