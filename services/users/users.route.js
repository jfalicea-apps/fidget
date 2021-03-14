const {
  newUser,
  intakeform,
  deactivateUser,
  deleteUser,
} = require('./users.controller');
const { formValidation } = require('../common/validation.service');
const router = require('express').Router();

router.get('/health', (req, res, next) => {
  res.send('ok');
});

// router.post('/', formValidation, newUser);

router.post('/intakeform', intakeform);

router.put('/deactiveuser', deactivateUser);
router.delete('/deleteuser', deleteUser);

module.exports = router;
