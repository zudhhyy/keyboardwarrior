const router = require('express').Router()
const leaderboardController = require('../controllers/leaderboardController')

router.get('/', leaderboardController.fetchData)
router.post('/', leaderboardController.createData)

module.exports = router