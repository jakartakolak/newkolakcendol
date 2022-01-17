const jwt = require("../helpers/jwt")
const { User } = require("../models/user")
module.exports = {
  authenticate(req, res, next) {
    if (req.headers.authorization) {
      let decoded = jwt.verify(req.headers.authorization);
      req.user = decoded
      next()
    } else {
      res.status(404).send("Unauthorized");
    }
  }
}