//create some routes which can recieve the incoming reuest

const express = require("express");    // Import express package
const router = express.Router();       // Import Router from express package

const controller = require("../Controller/Index");     // Import controller

router.get("/products", controller.getAllProducts);

router.get("/:gender/:names", controller.getAllProductstByName);

router.get("/:gender", controller.getAllRestaurantByGender);

router.get("/:category", controller.getAllRestaurantByCategory);

//router.get('/getMealTypes', controller.getAllMealTypes);

module.exports = router;