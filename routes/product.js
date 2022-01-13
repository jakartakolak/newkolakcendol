const Controller = require('../../controller/productController')
const router = require('express').Router()
const authenticate = require("../../middleware/auth")

router.post('/kolak/up', Controller.upKolak)
router.post('/kolak/down', Controller.downKolak)
router.post('/rujak/up', Controller.upRujak)
router.post('/rujak/down', Controller.downRujak)
router.post('/cendol/up', Controller.upCendol)
router.post('/cendol/down', Controller.downCendol)

module.exports = router