'use strict'

var express = require('express');
var router = express.Router();
var helpers = require('handlebars-helpers')();
var Handlebars = require('handlebars');

const pg = require('../db/knex_config.js')

/* GET home page. */
router.get('/', function(req, res, next) {
   pg('blogposts').select()
     .then((rows)=>{
       res.render('index', {items: rows})
       console.log("working");
   })
     .catch((err)=>{
       console.error("Error getting from the database");
       next(err)
     })
 });
 router.get('/article/:id', function(req, res, next) {
   var id = req.params.id;
   console.log(id);
    pg('blogposts').where('id', id)
      .then((rows)=>{
        res.render('article', {items: rows})
        console.log(rows);
    })
      .catch((err)=>{
        console.error("Error getting from the database");
        next(err)
      })
  });


module.exports = router;
