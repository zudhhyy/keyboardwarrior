const router = require('express').Router()
const gameRoute = require('./gameRoute')
const leaderboardRouter = require('./leaderboardRouter')

router.use('/game', gameRoute)
router.use('/leaderboard', leaderboardRouter)


module.exports = router