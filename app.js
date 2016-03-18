var express = require('express')
var debug = require('debug')

var app = express()
var log = debug('tmon:app.js')

app.use(express.static('public'))

var listenPort = 3000
app.listen(listenPort)
log(`listening on *:${listenPort}`)
