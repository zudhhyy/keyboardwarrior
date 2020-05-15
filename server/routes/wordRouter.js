const router = require('express').Router()
const wordController = require('../controllers/wordController')

router.get('/', wordController.fetchData)

module.exports = router