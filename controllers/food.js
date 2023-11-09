var food = require('../models/food');
// List of all food
exports.food_list = async function(req, res) {
  try{
  thefood = await food.find();
  console.log("thefood",thefood);
  res.send(thefood);
  }
  catch(err){
  res.status(500);
  res.send(`{"error": ${err}}`);
  }
  };
  
// for a specific food.
exports.food_detail = function(req, res) {
res.send('NOT IMPLEMENTED: food detail: ' + req.params.id);
};
// Handle food create on POST.
exports.food_create_post = async function(req, res) {
  console.log(req.body)
  let document = new food();
  // We are looking for a body, since POST does not have query parameters.
  // Even though bodies can be in many different formats, we will be picky
  // and require that it be a json object
  // {"food_type":"goat", "cost":12, "size":"large"}
  document.type = req.body.type;
  document.name= req.body.name;
  document.price = req.body.price;
  try{
  let result = await document.save();
  res.send(result);
  }
  catch(err){
  res.status(500);
  res.send(`{"error": ${err}}`);
  }
  };
  

// Handle food delete form on DELETE.
exports.food_delete = function(req, res) {
res.send('NOT IMPLEMENTED: food delete DELETE ' + req.params.id);
};
// Handle food update form on PUT.
exports.food_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: food update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.food_view_all_Page = async function(req, res) {
  try{
  thefood = await food.find();
  res.render('food', { title: 'food Search Results', results: thefood });
  }
  catch(err){
  res.status(500);
  res.send(`{"error": ${err}}`);
  }
  };

  // var express = require('express');
  // const food_controllers= require('../controllers/food');
  // var router = express.Router();
  // /* GET food */
  // router.get('/', food_controllers.food_view_all_Page );
  // module.exports = router;
  