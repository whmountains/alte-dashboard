var express  = require('express')
var http     = require('http')
var socketio = require('socket.io')
var debug    = require('debug')
var inputs   = require('./reader.js')
var morgan   = require('morgan')

var app = express()
var server = http.Server(app)
var io = socketio(server)
var log = debug('tmon:app.js')

app.use(morgan('dev'))
app.use(express.static('public'))

setInterval(readSensors, 1000)

var listenPort = 3000
server.listen(listenPort)
log(`listening on *:${listenPort}`)

function readSensors() {
  var pressure = inputs.getPressure()
  io.emit('readings', {pressure})
}
