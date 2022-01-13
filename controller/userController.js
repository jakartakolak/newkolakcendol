const { User } = require('../models')
// const bcrypt = require('bcryptjs')


class Controller {

    static userRegister(req, res) {
        let newUser = req.body
        let { username, password, email, phonenumber, photo } = newUser
        User.findOrCreate({
            where: {
                username: newUser.username,
                email: newUser.email
            }
        })
            .then(response=>{
                res.status(400).json({"Status" : "Failed","Message":"Username or Email Has Been taken"})
            })
            .then((user, created) => {
                // console.log(created, user);
                res.json(created);
            });
    }

    static userLogin(req, res) {
        let email = req.body.email
        let password = req.body.password
    }
}

module.exports = Controller