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
      return knex('video').insert({
        'youtube': video.youtube,
        'reaction': video.reaction
      }).returning('id')
      .then(function(data){
      return knex('users_videos').insert({users_id: userid, video_id : data[0]}).returning('id');
    });
  },
  deleteVideo : function(userid, videoid){
    return knex('users_videos').del().where({'users_id': userid,'video_id': videoid }).then(function(data){
      return knex('video').del().where({'id': videoid});
    });
  }

};
