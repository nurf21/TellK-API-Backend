const router = require('express').Router()
const { getContactById } = require('../controller/contact')

router.get('/:id', getContactById)

module.exports = router
