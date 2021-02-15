const { newUser } = require('./users.controller');
const { formValidation } = require('../common/validation.service');
const router = require('express').Router();

router.get('/health', (req, res, next) => {
  res.send('ok');
});

router.post('/', formValidation, newUser);

module.exports = router;
