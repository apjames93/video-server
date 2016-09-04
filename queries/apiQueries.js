var knex = require('../db/knex');


module.exports = {

  findUserByUserName : function(userName){
    return knex('users').where({"userName": userName}).first();
  },

  addUser : function(body){
    return knex('users').insert(body);
  },
  getUserData : function(id){
      return knex('users').where({id: id});
  },
  getData : function(){
    return knex('users')
  }


};
