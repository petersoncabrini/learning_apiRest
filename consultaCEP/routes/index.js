var express = require('express');
var router = express.Router();
const MainController = require ("../controllers/MainController")

/* GET home page. */
router.get('/', MainController.index);

module.exports = router;
