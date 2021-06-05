// Fichier ex020/main6.js
var user = require('./lib/user6.js');
var u1 = new user('Alice');
var u2 = new user('Maïa');
console.log('User version: ' + u1.version);
u1.say("Bonjour");
u2.say("Bonjour");
