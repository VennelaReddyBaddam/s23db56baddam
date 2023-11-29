var express = require('express');
var router = express.Router();
var food_controller = require('../controllers/food');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('food', { title: 'Search Results food' });
});
/* GET detail food page */
router.get('/detail', food_controller.food_view_one_Page);
/* GET create food page */
router.get('/create', food_controller.food_create_Page);
/* GET create update page */
router.get('/update', food_controller.food_update_Page);
/* GET delete food page */
router.get('/delete', food_controller.food_delete_Page);
module.exports = router;
