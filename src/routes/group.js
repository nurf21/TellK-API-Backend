const router = require('express').Router()
const { getAllGroup } = require('../controller/group')

router.get('/', getAllGroup)

module.exports = router
