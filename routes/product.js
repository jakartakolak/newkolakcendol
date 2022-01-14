const router = require('express').Router()
const Controller = require('../controller/productController')
const {authenticate} = require("../middleware/auth")

router.post('/kolak/up',authenticate, function(req,res){
    Controller.upKolak(req,res)
})
router.post('/kolak/down',authenticate, Controller.downKolak)
router.post('/rujak/up', authenticate,Controller.upRujak)
router.post('/rujak/down',authenticate, Controller.downRujak)
router.post('/cendol/up', authenticate,Controller.upCendol)
router.post('/cendol/down',authenticate, Controller.downCendol)

module.exports = router