const { User } = require('../models')
const crypt = require('../helpers/cyrpt')
const jwt = require('../helpers/jwt')

class Controller {

    static userRegister(req, res) {
        let newUser = req.body
        User.findOrCreate({
            where: {
                username: newUser.username,
                email: newUser.email,
            },
            defaults: {
                password: newUser.password,
                phonenumber: newUser.phonenumber,
                kolakCount : 0,
                rujakCount:0,
                cendolCount:0,
            }
        })
            .then(response => {
                let username = response[0].dataValues.username
                let email = response[0].dataValues.email
                if (response[1]) {
                    res.status(201).json({ "Status": "Created", "Message": "New User Registered" })
                } else {
                    res.status(400).json({"Status":"Failed","message":"Username or Email has been taken"})
                }
            })
            .then((user, created) => {
                res.json(created);
            })
            .catch(err => {
                console.log(err);

            })


    }

    static userLogin(req, res) {
        let userLogin = req.body
        const { username, password } = userLogin
        User.findOne({
            where: {
                username: userLogin.username,
                password:userLogin.password
            }
        })
            .then(data => {
                if (crypt.checkPassword(password, data.password)) {
                    let signUser = {
                        username: data.username,
                        email: data.email,
                        phonenumber: data.phonenumber,
                        kolakCount:data.kolakCount,
                        rujakCount:data.rujakCount,
                        cendolCount:data.cendolCount
                    };
                    let token = jwt.sign(signUser);
                    res.status(200).json({
                        "status":"success",
                        "Authorization":token,
                    })
                }
            })
            .catch(err => res.status(401).json(
                {"status":"failed","message":"Wrong Username or Password"}
            ))
    }

    static help(req,res){
        res.status(200).json({
            "status":"success",
            "message":"Selamat datang di aplikasi cendol kolak rujak. Anda bisa melihat jumlah cemilan anda disini"
          })
    }
}

module.exports = Controller