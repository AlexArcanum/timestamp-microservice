var express = require('express');
var router = express.Router();

var ctrlDate = require('../controllers/date.controllers');

router
  .route('/:dateformat')
  .get(ctrlDate.getTimeStamp);

module.exports = router;