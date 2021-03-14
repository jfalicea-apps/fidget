// const { usernameCheck, passwordCheck, emailCheck } = require('./users.service');

const { func } = require('../../db');
const {
  insertUser,
  intakeform,
  deactiveUser,
  deleteUser,
} = require('./users.service');

const userController = {
  // newUser: async function (req, res, next) {
  //   const { fullname, email, password } = req.body;
  //   const newUserServiceResp = await insertUser(fullname, email, password);
  //   if (newUserServiceResp.status != 200) {
  //     return res.send(newUserServiceResp.status).json(newUserServiceResp.msg);
  //   }
  //   return res.status(200).json(newUserServiceResp.msg);
  // },
  intakeform: async function (req, res, next) {
    const {
      firstName,
      lastName,
      email,
      password,
      address1,
      address2,
      city,
      state,
      zip,
      dateOfBirth,
      agreedTOC,
      genderIdentity,
      educationalLevel,
    } = req.body;
    const intakeFormServiceResponse = await intakeform(
      firstName,
      lastName,
      email,
      password,
      address1,
      address2,
      city,
      state,
      zip,
      dateOfBirth,
      agreedTOC,
      genderIdentity,
      educationalLevel
    );
    return res
      .status(intakeFormServiceResponse.status)
      .json(intakeFormServiceResponse.msg);
  },
  deactivateUser: async function (req, res, next) {
    const { id, isActive } = req.body;
    const deactivateUserServiceResponse = await deactiveUser(
      parseInt(id),
      isActive
    );
    return res
      .status(deactivateUserServiceResponse.status)
      .json(deactivateUserServiceResponse.msg);
  },
  deleteUser: async function (req, res, next) {
    const { id, password, areSureAck } = req.body;
    const deleteUserServiceResponse = await deleteUser(
      parseInt(id),
      password,
      areSureAck
    );
    return res
      .status(deleteUserServiceResponse.status)
      .json(deleteUserServiceResponse.msg);
  },
};

module.exports = userController;
