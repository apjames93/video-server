var express = require('express');
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
    queries.addVideo(req.query, req.query.id[0])
    .then(function(data){
      res.json({itIS : "done"});
    });
  });
module.exports = router;
