// Fichier ex020/main1.js
var user = require('./lib/user.js');
var u1 = new user('Alice');
var u2 = new user('Maïa');

u1.say('Bonjour');
u2.say ('Bonjour');
console.log('User version=' + u1.version);
console.log('Nb users = ' + u1.users.length);
console.log('Nb users = ' + u2.users.length);
