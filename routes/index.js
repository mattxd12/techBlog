'use strict'

var express = require('express');
var router = express.Router();

// var pg = require('pg');
const pg = require('../db/knex_config.js')
// const app = express();

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

// app.get('/db', function (request, response) {
//   pg.connect(process.env.DATABASE_URL, function(err, client, done) {
//     client.query('SELECT * FROM blogposts', function(err, result) {
//       done();
//       if (err)
//        { console.error(err); response.send("Error " + err); }
//       else
//        { response.render('pages/db', {results: result.rows} ); }
//     });
//   });
// });


module.exports = router;
