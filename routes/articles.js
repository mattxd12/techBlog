'use strict'

var express = require('express');
var router = express.Router();
var helpers = require('handlebars-helpers')();
var Handlebars = require('handlebars');

const pg = require('../db/knex_config.js')


// router.get('/article/:id', function(req, res, next) {
//   var id = req.params.id;
//   console.log(id);
//    pg('blogposts').select()
//      .then((data)=>{
//        res.render('articles', {data: data[id]})
//        console.log(data);
//    })
//      .catch((err)=>{
//        console.error("Error getting from the database");
//        next(err)
//      })
//  });

  //  router.get('/article/:id', function(req, res, next) {
  //    var id = req.params.id;
  //    query.getblogpostsById(id)
  //      .then(function(data) {
  //      res.render('articles', {data:data[id]})
  //    })
  //    .catch(function(err){
  //      return next(err);
  //    })
  //  })

module.exports = router;
