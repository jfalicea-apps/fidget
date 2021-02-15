// const { usernameCheck, passwordCheck, emailCheck } = require('./users.service');

const { insertUser } = require('./users.service');

const userController = {
  newUser: async function (req, res, next) {
    const { fullname, email, password } = req.body;
    const newUserServiceResp = await insertUser(fullname, email, password);
    if (newUserServiceResp.status != 200) {
      return res.send(newUserServiceResp.status).json(newUserServiceResp.msg);
    }
    return res.status(200).json(newUserServiceResp.msg);
  },
};

module.exports = userController;
