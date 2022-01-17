const {Product,User} = require('../models')


class Controller {
    static upKolak(req,res){
        // console.log("masuk");
        Product.increment('count')
    }
    static downKolak(req,res){
        Product
    }
    static upRujak(req,res){
        Product
    }
    static downRujak(req,res){
        Product
    }
    static upCendol(req,res){
        Product
    }
    static downCendol(req,res){
        Product
    }
}

module.exports = Controller