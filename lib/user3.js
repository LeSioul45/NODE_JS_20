// Fichier ex020/lib/user3.js
var say = function (user, msg) {
  var fullMsg = user + ' dit: ' + msg;
  console.log(fullMsg);
  return fullMsg;
  
};
exports.say = say;
exports.version = '1.1';
