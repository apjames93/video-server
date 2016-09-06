var express = require('express');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var xoauth2 = require('xoauth2');
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
      res.json({
        itIS : "done",
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
    var nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'funnyvideo901@gmail.com',
        pass: process.env.EMAIL_PASSWORD
      }
    });

    var mailOptions = {
      from: '<funnyvideo901@gmail.com>',
      to: req.query.to,
      subject: req.query.subject,
      text: req.query.text,
    };

    transporter.sendMail(mailOptions, function(error, info){
      if(error){
        return console.log(error);
      }
      console.log('Message sent: ' + info.response);
      res.json({data: info.response});
    });
  });


module.exports = router;
