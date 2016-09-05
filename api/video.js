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
console.log(req);
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
    to: 'apjames93@gmail.com',
    subject: 'Hello ✔',
    text: 'Hello world ?',
    // html: '<iframe id="video" width="420" height="315" src="//www.youtube.com/embed/9B7te184ZpQ?rel=0" frameborder="0" allowfullscreen></iframe>'
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
    res.json({data: info.response});
});
  });






module.exports = router;
