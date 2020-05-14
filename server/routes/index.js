const router = require('express').Router()
const gameRoute = require('./gameRoute')
const leaderboardRouter = require('./leaderboardRouter')
const wordRouter = require('./wordRouter')

router.use('/game', gameRoute)
router.use('/leaderboard', leaderboardRouter)
router.use('/word', wordRouter)

module.exports = router