const router = require('express').Router()
const { getMessageByRoomId, sendMessage } = require('../controller/message')

router.get('/', getMessageByRoomId)

router.post('/', sendMessage)

module.exports = router
