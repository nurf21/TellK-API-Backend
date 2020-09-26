const routes = require('express').Router()

const user = require('./routes/user')
const contact = require('./routes/contact')

routes.use('/user', user)
routes.use('/contact', contact)

module.exports = routes
