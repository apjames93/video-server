var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();
var knex = require('../db/knex');
var queries = require('../queries/apiQueries');

  router.get('/:id', function(req, res, next){
    queries.getUserData(req.params.id)
    .then(function(data){
      res.json({user : data});
    });
  });
  router.post('/', function(req, res, next){
    queries.addVideo(req.query, req.query.users_id[0])
    .then(function(data){
      res.json({itIS : "done",
                data : data
                });
    });
  });
  router.delete('/:id', function(req, res, next){
      queries.deleteVideo(req.params.id, req.body.video_id)
    .then(function(data){
        res.json({data: data});
    });
  });
module.exports = router;
