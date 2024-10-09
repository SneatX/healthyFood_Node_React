const express = require('express');
const router = express.Router();
const sessionMiddleware = require("../middlewares/authValidator.js");

const apiController = require('../controllers/apiController.js');

router.get("/search",sessionMiddleware, apiController.searchFood)

module.exports = router;


