const router = require('express').Router()
const { getRoomByUserId, searchRoom, createRoom } = require('../controller/room')

router.get('/search/', searchRoom)
router.get('/:id', getRoomByUserId)

router.post('/', createRoom)

module.exports = router
