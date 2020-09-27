const routes = require('express').Router()

const user = require('./routes/user')
const contact = require('./routes/contact')
const room = require('./routes/room')
const message = require('./routes/message')

routes.use('/user', user)
routes.use('/contact', contact)
routes.use('/room', room)
routes.use('/message', message)

module.exports = routes
