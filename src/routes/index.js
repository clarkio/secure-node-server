const express = require('express');
const csrf = require('csurf');
const router = express.Router();

const csrfProtection = csrf({ cookie: true });

/* GET home page. */
router.get('/', csrfProtection, function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', csrfProtection, function (req, res, next) {
  res.send({ message: 'Success' });
});

module.exports = router;
