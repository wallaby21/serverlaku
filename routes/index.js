var express = require('express');
var router = express.Router();
const fs = require('fs');
const db = require('../src/queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/airports', db.getAirports);
// router.get('/writeairports', function(req, res, next) {
//   let content;
//   fs.readFile(__dirname + '/../public/airports.json', "utf8", function (err, data) {
//     if (err) throw err;
//     content = JSON.parse(data);
//     content.map(i => res.send(console.log(i.code)));
//   });
// });

module.exports = router;
