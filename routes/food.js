var express = require('express');
var router = express.Router();
var food_controller = require('../controllers/food');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('food', { title: 'Search Results food' });
});

/* GET detail food page */
router.get('/detail', food_controller.food_view_one_Page);

module.exports = router;
