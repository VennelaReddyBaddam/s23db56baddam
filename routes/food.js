var express = require('express');
var router = express.Router();
var food_controller = require('../controllers/food');
const secured = (req, res, next) => {
  if (req.user){
  return next();
  }
  res.redirect("/login");
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('food', { title: 'Search Results food' });
});
/* GET detail food page */
router.get('/detail',secured, food_controller.food_view_one_Page);
/* GET create food page */
router.get('/create',secured, food_controller.food_create_Page);
/* GET create update page */
router.get('/update',secured, food_controller.food_update_Page);
/* GET delete food page */
router.get('/delete',secured, food_controller.food_delete_Page);
module.exports = router;
