const express = require('express');
const router = express.Router();

const {
  indexPage
} = require("../controllers/index");

/* GET home page. */
router.get('/', indexPage);

module.exports = router;
