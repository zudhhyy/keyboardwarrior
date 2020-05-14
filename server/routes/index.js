const router = require('express').Router()
const leaderboardRouter = require('./leaderboardRouter')
const wordRouter = require('./wordRouter')

router.use('/leaderboard', leaderboardRouter)
router.use('/word', wordRouter)

module.exports = router