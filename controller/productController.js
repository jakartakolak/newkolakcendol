const { User } = require("../models")


class Controller {
    static upKolak(kolak, res) {
        User.findOne({
            where: {
                username: kolak.user.username
            }
        })
            .then(data => {
                User.findByPk(data.id)
                    .then(user => {
                        return user.increment('kolakCount', { by: 1 })
                    })
                    .then(updated => {
                        res.status(200).json({
                            username: updated.username,
                            email: updated.email,
                            phonenumber:updated.phonenumber,
                            kolakCount: updated.kolakCount
                        })
                    })
            })
            .catch(err => {
                res.status(404).json({
                    status: "failed"
                })
            })
    }
    static downKolak(kolak, res) {
        User.findOne({
            where: {
                username: kolak.user.username
            }
        })
            .then(data => {
                User.findByPk(data.id)
                    .then(user => {
                        if(user.kolakCount <=0){
                            res.status(400).json({
                                "status":"failed",
                                "message":"Count Can't be below 0"
                            })
                            return user.kolakCount = 0
                        }
                        return user.decrement('kolakCount', { by: 1 })
                    })
                    .then(updated => {
                        res.status(200).json({
                            username: updated.username,
                            email: updated.email,
                            phonenumber:updated.phonenumber,
                            kolakCount: updated.kolakCount
                        })
                    })
            })
            .catch(err => {
                res.status(404).json({
                    status: "failed"
                })
            })
    }
    static upRujak(rujak, res) {
        User.findOne({
            where: {
                username: rujak.user.username
            }
        })
            .then(data => {
                User.findByPk(data.id)
                    .then(user => {
                        return user.increment('rujakCount', { by: 1 })
                    })
                    .then(updated => {
                        res.status(200).json({
                            username: updated.username,
                            email: updated.email,
                            phonenumber:updated.phonenumber,
                            rujakCount: updated.rujakCount
                        })
                    })
            })
            .catch(err => {
                res.status(404).json({
                    status: "failed"
                })
            })
    }
    static downRujak(rujak, res) {
        User.findOne({
            where: {
                username: rujak.user.username
            }
        })
            .then(data => {
                User.findByPk(data.id)
                    .then(user => {
                        if(user.rujakCount <=0){
                            res.status(400).json({
                                "status":"failed",
                                "message":"Count Can't be below 0"
                            })
                            return user.rujakCount = 0
                        }
                        return user.decrement('rujakCount', { by: 1 })
                    })
                    .then(updated => {
                        res.status(200).json({
                            username: updated.username,
                            email: updated.email,
                            phonenumber:updated.phonenumber,
                            rujakCount: updated.rujakCount
                        })
                    })
            })
            .catch(err => {
                res.status(404).json({
                    status: "failed"
                })
            })
    }
    static upCendol(cendol, res) {
        User.findOne({
            where: {
                username: cendol.user.username
            }
        })
            .then(data => {
                User.findByPk(data.id)
                    .then(user => {
                        return user.increment('cendolCount', { by: 1 })
                    })
                    .then(updated => {
                        res.status(200).json({
                            username: updated.username,
                            email: updated.email,
                            phonenumber:updated.phonenumber,
                            cendolCount: updated.cendolCount
                        })
                    })
            })
            .catch(err => {
                res.status(404).json({
                    status: "failed"
                })
            })
    }
    static downCendol(cendol, res) {
        User.findOne({
            where: {
                username: cendol.user.username
            }
        })
            .then(data => {
                User.findByPk(data.id)
                    .then(user => {
                        if(user.cendolCount <=0){
                            res.status(400).json({
                                "status":"failed",
                                "message":"Count Can't be below 0"
                            })
                            return user.cendolCount = 0
                        }
                        return user.decrement('cendolCount', { by: 1 })
                    })
                    .then(updated => {
                        res.status(200).json({
                            username: updated.username,
                            email: updated.email,
                            phonenumber:updated.phonenumber,
                            cendolCount: updated.cendolCount
                        })
                    })
            })
            .catch(err => {
                res.status(404).json({
                    status: "failed"
                })
            })
    }
    static reset(reset, res) {
        User.findOne({
            where: {
                username: reset.user.username
            }
        })
            .then(data => {
                return data.update({
                    kolakCount: 0,
                    rujakCount: 0,
                    cendolCount: 0
                })
            })
            .then(updated => {
                res.status(200).json({
                    username: updated.username,
                    email: updated.email,
                    phonenumber: updated.phonenumber,
                    kolakCount: updated.kolakCount,
                    rujakCount: updated.rujakCount,
                    cendolCount: updated.cendolCount,
                })
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = Controller