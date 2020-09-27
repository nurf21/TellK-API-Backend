const router = require('express').Router()
const { getRoomByUserId, createRoom } = require('../controller/room')

router.get('/:id', getRoomByUserId)

router.post('/', createRoom)

module.exports = router
