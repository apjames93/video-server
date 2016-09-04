var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var queries = require('../queries/apiQueries');

  router.get('/:id', function(req, res, next){
    queries.getUserData(req.params.id)
    .then(function(data){
      console.log('hit');
      res.json({user : data});
    });
  });
  router.post('/', function(req, res, next){
    console.log(req.query);
    queries.addVideo(req.query, req.query.users_id[0])
    .then(function(data){
      res.json({itIS : "done",
                data : data
                });
    });
  });
module.exports = router;
