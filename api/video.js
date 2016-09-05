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
      queries.deleteVideo(req.query.users_id, req.query.video_id)
    .then(function(data){
        res.json({data: data});
    });
  });



  router.post('/email', function(req, res, next){
var nodemailer = require("nodemailer"),

  transport = nodemailer.createTransport('direct', {
    debug: true, //this!!!
  });
transport.sendMail({
    from: "<apjames93@gmail.com>", // sender address
    to: "apjames93@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world ✔", // plaintext body
    html: "<b>Hello world ✔</b>" // html body
}, console.error);
  });





module.exports = router;
