const router = require('express').Router()
const gameRoute = require('./gameRoute')

router.use('/game', gameRoute)

module.exports = router