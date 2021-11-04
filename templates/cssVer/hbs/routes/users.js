const express = require('express');
const router = express.Router();

const {
  userIndexPage
} = require("../controllers/users");

/* GET users listing. */
router.get('/', userIndexPage);

module.exports = router;
