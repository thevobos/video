// Generated by CoffeeScript 1.12.6
(function() {
  var crypto;

  crypto = require('crypto');

  module.exports = {
    calcHmac: function(data, key) {
      var hmac;
      hmac = crypto.createHmac('sha256', key);
      hmac.update(data);
      return hmac.digest();
    }
  };

}).call(this);