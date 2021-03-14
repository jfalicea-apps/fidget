const router = require('express').Router();
const { checkSecurityKey } = require('../auth/checkSecKey');
const { insertNewEmote } = require('./buttonTranslation.controller');

router.get('/healthkey', checkSecurityKey, (req, res) => {
  res.status(200).json('All systems are healthy');
});
router.get('/health', (req, res) => {
  res.status(200).json('All systems are healthy');
});

router.post('/', checkSecurityKey, insertNewEmote);

module.exports = router;
