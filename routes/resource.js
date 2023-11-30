const express = require('express');
const router = express.Router();

// Require controller modules.
const apiController = require('../controllers/api');
const foodController = require('../controllers/food');

// API ROUTE
router.get('/', apiController.api);

// FOOD ROUTES
// POST request for creating a food.
router.post('/food', foodController.food_create_post);

// DELETE request to delete food.
router.delete('/food/:id', foodController.food_delete);

// PUT request to update food.
router.put('/food/update/:id', foodController.food_update_put);

// GET request for one food.
router.get('/food/:id', foodController.food_detail);

// GET request for list of all food items.
router.get('/foods', foodController.food_list);

// GET request for food detail view.
router.get('/detail', foodController.food_view_one_Page);

module.exports = router;
