const jwt = require('jsonwebtoken');
const secret = "laruku"
module.exports = {
  sign: function(user) {
    return jwt.sign(user, secret,{expiresIn: '24h'});
  },
  verify: function(token) {
    return jwt.verify(token, secret);
  }
}