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
exports.food_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await food.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};

// Handle food create on POST.
exports.food_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: food create POST');
};
// Handle food delete form on DELETE.
exports.food_delete = function(req, res) {
res.send('NOT IMPLEMENTED: food delete DELETE ' + req.params.id);
};
//Handle food update form on PUT.
exports.food_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await food.findById( req.params.id)
// Do updates of properties
if(req.body.food_type)
toUpdate.food_type = req.body.food_type;
if(req.body.name) toUpdate.name = req.body.name;
if(req.body.price) toUpdate.price = req.body.price;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
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
  
  // Handle food delete on DELETE.
exports.food_delete = async function(req, res) {
  console.log("delete " + req.params.id)
  try {
  result = await food.findByIdAndDelete( req.params.id)
  console.log("Removed " + result)
  res.send(result)
  } catch (err) {
  res.status(500)
  res.send(`{"error": Error deleting ${err}}`);
  }
 };

 // Handle a show one view with id specified by query

 exports.food_view_one_Page = async function(req, res) {
  console.log("single view for id " + req.query.id);
  try {
    const result = await food.findById(req.query.id).exec();
    res.render('fooddetail', { title: 'food Detail', toShow: result });
  } catch (err) {
    res.status(500).send(`{'error': '${err}'}`);
  }
};