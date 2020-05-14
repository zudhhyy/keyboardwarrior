const router = require('express').Router()
const gameController = require('../controllers/gameController')

router.get('/getGames', gameController.getGames)
router.post('/createGame', gameController.createGame)
router.put('/updateGame/:id', gameController.updateGame)
router.delete('/deleteGame/:id', gameController.deleteGame)

module.exports = router