const express = require('express')
const app = express()
const route = require('./routes')
const cors = require('cors')
const port = process.env.PORT || 3000
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use(route)

http.listen(port, () => {
    console.log(`This app is listening on port: ${port}`)
})