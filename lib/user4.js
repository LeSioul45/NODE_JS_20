// Fichier ex020/lib/user4.js
var User = function (user, msg) {
  this.version = '1.1';
  this.name = user;
  this.say = function(msg) {
    var fullMsg = user + ' dit: ' + msg;
    console.log(fullMsg);
  };
};
module.exports = User;
