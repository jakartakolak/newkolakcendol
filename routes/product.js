const router = require('express').Router()
const Controller = require('../controller/productController')
const {authenticate} = require("../middleware/auth")

router.post('/kolak/up',authenticate,function(req,res){
    Controller.upKolak(req,res)
})
router.post('/kolak/down',authenticate, function(req,res){
    Controller.downKolak(req,res)
})
router.post('/rujak/up', authenticate,function (req,res){
    Controller.upRujak(req,res)
})
router.post('/rujak/down',authenticate,function(req,res) {
    Controller.downRujak(req,res)
})
router.post('/cendol/up',authenticate, function(req,res){
    Controller.upCendol(req,res)
})
router.post('/cendol/down',authenticate, function(req,res){
    Controller.downCendol(req,res)
})
router.post('/reset',authenticate,function(req,res){
    Controller.reset(req,res)
})

module.exports = router