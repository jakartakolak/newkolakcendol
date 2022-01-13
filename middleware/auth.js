const jwt = require('../helpers/jwt')
const userModel = require('../models/user')

module.exports = {
  authenticate(req, res, next) {
    if (req.headers.authorization) {
      // console.log(req.headers.authorization);
      let decoded = jwt.verify(req.headers.authorization);
      userModel.findOne({
        username: decoded.username,
      })
        .then((user) => {
          if (user) {
            req.user = decoded;
            next();
          } else {
            res.status(400).send("Unathorized");
          }
        })
        .catch(next);
    } else {
      throw Message.UNAUTHENTICATE;
    }
  }
}