const router = require('express').Router()
const {
  getContactById,
  addContact,
  deleteContact
} = require('../controller/contact')

router.get('/:id', getContactById)

router.post('/', addContact)

router.delete('/', deleteContact)

module.exports = router
