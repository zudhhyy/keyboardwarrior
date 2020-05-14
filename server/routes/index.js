const router = require('express').Router()
const leaderboardRouter = require('./leaderboardRouter')

router.use('/leaderboard', leaderboardRouter)

module.exports = router