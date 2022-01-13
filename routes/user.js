const userController = require("../controller/userController")
const router = require('express').Router()

// router.get('/login', Controller.getLogin)
// router.get('/register', Controller.getRegister)
router.post('/register',userController.userRegister)

router.post('/login', userController.userLogin);



module.exports = router