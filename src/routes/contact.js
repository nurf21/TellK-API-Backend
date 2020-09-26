const router = require('express').Router()
const { getContactById, deleteContact } = require('../controller/contact')

router.get('/:id', getContactById)
router.delete('/', deleteContact)

module.exports = router
