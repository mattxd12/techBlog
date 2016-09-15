'use strict'

var express = require('express');
var router = express.Router();

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

module.exports = router;
