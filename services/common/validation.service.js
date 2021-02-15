const { param } = require('../users/users.route');

const userFormValidation = {
  usernameCheck: function (fullname) {
    //longer than two characters
    console.log(fullname);
    return fullname.length > 2 ? true : false;
  },
  passwordCheck: function (password) {
    const passwordErrors = [];
    if (password.length < 8) {
      passwordErrors.push('password length');
    }
    if (!password.includes('!' || '&' || '@' || '*')) {
      passwordErrors.push('password needs complexity');
    }
    if (passwordErrors.length === 0) {
      return true;
    } else {
      return false;
    }
  },
  emailCheck: function (email) {
    if (email.includes('@')) {
      return true;
    } else false;
  },
};

const formValidation = function (req, res, next) {
  const usernameCheck = userFormValidation.usernameCheck(req.body.fullname);
  const passwordCheck = userFormValidation.passwordCheck(req.body.password);
  const emailCheck = userFormValidation.emailCheck(req.body.email);
  if (usernameCheck && passwordCheck && emailCheck) {
    next();
  } else {
    res.status(401).send('bad info provided');
  }
};
module.exports = { userFormValidation, formValidation };
