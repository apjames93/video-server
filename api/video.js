var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var queries = require('../queries/apiQueries');

router.get('/:id', function(req, res, next){
  queries.getUserData(req.params.id)
  .then(function(data){
    console.log(data);
    res.json({user : data});
  });
});
module.exports = router;
