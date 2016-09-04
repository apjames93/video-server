var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var queries = require('../queries/apiQueries');

var video = require('./video');
router.use('/video', video);


module.exports = router;
