const jwt = require("../helpers/jwt")
module.exports = {
  authenticate(req, res, next) {
    if (req.headers.authorization) {
      let decoded = jwt.verify(req.headers.authorization);
      User.findOne({
        where: {
          username: decoded.username
        }
      })
      .then(user => {
        console.log(user);
        next()
      })
    } else {
      throw err;
    }
  }
}