const routes = require('express').Router()

const user = require('./routes/user')
const contact = require('./routes/contact')
const room = require('./routes/room')

routes.use('/user', user)
routes.use('/contact', contact)
routes.use('/room', room)

module.exports = routes
