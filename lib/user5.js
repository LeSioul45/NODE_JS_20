// Fichier ex020/lib/user5.js
var User = function (user, msg) {
  this.version = '1.1';
  this.name = user;
  this.uid = this.users.push(user);
  console.log('Nb users = ' + this.users.length);
  this.say = function(msg) {
    var fullMsg = user + '(' + this.uid + ') dit: ' + msg;
    console.log(fullMsg);
  };
};
User.prototype.users  = []; // variable de classe
module.exports.User = User;
