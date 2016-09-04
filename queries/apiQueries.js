var knex = require('../db/knex');


module.exports = {

  findUserByUserName : function(userName){
    return knex('users').where({"userName": userName}).first();
  },

  addUser : function(body){
    return knex('users').insert(body);
  },
  getUserData : function(id){
      return knex('users').innerJoin('users_videos', 'users_id', 'users.id').innerJoin('video','video_id', 'video.id');
  },
  getData : function(){
    return knex('users');
  },



  addVideo : function(video, userid){
    // console.log('added to video table');
  return knex('video').insert({
    'youtube': video.youtube,
    'reaction': video.reaction
  }).returning('id')
  .then(function(data){
    console.log(data[0], "adding to join in add video ");
  return knex('users_videos').insert({users_id: 1, video_id : data[0]}).returning('id');
});
}


};
