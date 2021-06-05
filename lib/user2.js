// Fichier ex020/lib/user2.js
var say = function (user, msg) {
  var fullMsg = user + ' dit: ' + msg;
  console.log(fullMsg);
  return fullMsg;
  
};
exports.say = say;
