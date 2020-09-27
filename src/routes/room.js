const router = require('express').Router()
const { getRoomByUserId } = require('../controller/room')

router.get('/:id', getRoomByUserId)

module.exports = router
