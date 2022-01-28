const jwt = require("../helpers/jwt")
module.exports = {
  authenticate(req, res, next) {
    if (req.headers.authorization) {
      let decoded = jwt.verify(req.headers.authorization);
      req.user = decoded
      next()
    } else {
      res.status(401).send("Unauthorized Please Login / Signup");
    }
  }
}