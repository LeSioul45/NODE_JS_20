var User = function(user) {
  this.name = user;
  this.version = '1.1.0';
  this.uid  = this.users.push(this);
  this.say = function(msg) {
    console.log(tchis.name + ' say: ' + msg);
  };
};
User.prototype.users = [];
module.exports = User;
