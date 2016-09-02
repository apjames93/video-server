var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var queries = require('../queries/apiQueries');

//change to use the list.js file
var video = require('./video');
router.use('/vido', video);

module.exports = router;
