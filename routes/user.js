const userController = require("../controller/userController")
const router = require('express').Router()


// --------------------LOGIN & REGISTER-----------------------
router.post('/register',userController.userRegister)
router.post('/login', userController.userLogin);
/**
 *      /help => 
 */



module.exports = router