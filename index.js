require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const routerNavigation = require('./src')
const socket = require('socket.io')
const http = require('http')

const app = express()
app.use(cors())

const server = http.createServer(app)
const io = socket(server)

io.on('connection', (socket) => {
  console.log('Socket.io connected')

  socket.on('joinRoom', (data) => {
    socket.join(data)
  })

  socket.on('roomMessage', (data) => {
    socket.broadcast.to(data.room).emit('chatMessage', data)
  })

  socket.on('changeRoom', (data) => {
    socket.leave(data.prevRoom)
    socket.join(data.newRoom)
  })

  socket.on('online', (data) => {
    socket.broadcast.emit('setOnline', data)
  })

  socket.on('offline', (data) => {
    socket.broadcast.emit('setOffline', data)
  })
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(express.static('uploads'))
app.use('/', routerNavigation)
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*')
  response.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Request-With, Content-Type, Accept, Authorization'
  )
  next()
})

app.get('*', (request, response) => {
  response.status(404).send('Path Not Found !')
})

server.listen(process.env.PORT, () => {
  console.log(`Listening on Port ${process.env.PORT}`)
})
