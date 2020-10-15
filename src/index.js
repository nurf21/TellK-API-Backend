const routes = require('express').Router()

const user = require('./routes/user')
const contact = require('./routes/contact')
const room = require('./routes/room')
const message = require('./routes/message')
const group = require('./routes/group')

routes.use('/user', user)
routes.use('/contact', contact)
routes.use('/room', room)
routes.use('/message', message)
routes.use('/group', group)

module.exports = routes
