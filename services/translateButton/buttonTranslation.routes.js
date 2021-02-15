const router = require('express').Router();
const db = require('../../db');
const { checkSecurityKey } = require('../auth/checkSecKey');
const { insertNewEmote } = require('./buttonTranslation.controller');

router.get('/health', checkSecurityKey, (req, res) => {
  res.status(200).json('All systems are healthy');
});

router.post('/', checkSecurityKey, insertNewEmote);

router.get('/', (req, res) => {
  //create function to handle translation
  const { level, userKey } = req.body;
});

module.exports = router;
