// Fichier ex020/main4.js
var user = Module.require('./lib/user4.js');
var u1 = new user('Alice');
var u2 = new user('Maïa');
console.log('User version: ' + u1.version);
u1.say("Bonjour");
u2.say("Bonjour");
