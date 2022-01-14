const jwt = require('jsonwebtoken');
const secret = "laruku"
module.exports = {
  sign: function(user) {
    return jwt.sign(user, secret);
  },
  verify: function(token) {
    return jwt.verify(token, secret);
  }
}