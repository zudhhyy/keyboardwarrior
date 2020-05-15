const express = require('express')
const app = express()
const route = require('./routes')
const cors = require('cors')
const port = process.env.PORT || 3000
const http = require('http').createServer(app)
const io = require('socket.io')(http)

<<<<<<< HEAD
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
=======
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
>>>>>>> d14ff642230417a1ed9853c9b70fd7b5071cf212

app.use(route)

http.listen(port, () => {
    console.log(`This app is listening on port: ${port}`)
})