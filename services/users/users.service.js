const userService = {
  insertUser: async function (fullname, email, password) {
    const db = require('../../db');
    const query = require('../common/queryService');
    const userExistQuery = await db.query(query.getSingleUser, [email]);
    const doesUserExit = userExistQuery.length ? true : false;
    if (doesUserExit) {
      return { status: 400, msg: 'you already exist' };
    }
    const bcrypt = require('bcryptjs');
    const { v4: uuidv4 } = require('uuid');
    const key = uuidv4();
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const insertQuery = query.newUserInsertQuery;
    const dbResp = await db.query(insertQuery, [fullname, email, key, hash]);
  },
  intakeform: async (
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
  ) => {
    const db = require('../../db');
    const { intakeFormErrors } = require('../common/errorMsgService');
    const { userQueries } = require('../common/queryService');
    const userExistQuery = await db.query(userQueries.getSingleUser, [email]);
    const doesUserExist = userExistQuery.length ? true : false;
    if (doesUserExist) {
      return { status: 400, msg: intakeFormErrors.userExists };
    }
    const bcrypt = require('bcryptjs');
    const { v4: uuidv4 } = require('uuid');
    const key = uuidv4();
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const fullname = `${firstName} ${lastName}`;
    const dbResp = await db.query(userQueries.intakeform, [
      fullname,
      firstName,
      lastName,
      email,
      key,
      hash,
      address1,
      address2,
      city,
      state,
      zip,
      dateOfBirth,
      agreedTOC,
      genderIdentity,
      educationalLevel,
    ]);
    return { status: 200, msg: dbResp, msg2: 'user successfully added' };
  },
  deleteUser: async function (id, password, areSureAck) {
    const db = require('../../db');
    const bcrypt = require('bcryptjs');
    const { userQueries } = require('../common/queryService');
    const deleteUserQuery = userQueries.deleteUser;
    const hashUserQuery = userQueries.getUserHash;
    const hash = await db.query(hashUserQuery, [id]);
    const checkPassword = bcrypt.compareSync(password, hash[0].password);
    console.log(checkPassword);
    if (!checkPassword) {
      return { status: 400, msg: 'the password supplied is incorrect.' };
    }
    if (!areSureAck) {
      return {
        status: 400,
        msg: 'you must answer yes to the delete user acknowlement.',
      };
    }
    await db.query(deleteUserQuery, [id]);
    return { status: 200, msg: 'the user was deleted.' };
  },
  // getUser: async function () {},
  // updateUser: async function () {},
  deactiveUser: async function (userid, isActive) {
    const db = require('../../db');
    const { userQueries } = require('../common/queryService');
    const checkIsActiveQuery = `SELECT "isActive" FROM users WHERE id=$1`;
    const checkIsActive = await db.query(checkIsActiveQuery, [userid]);
    if (!checkIsActive[0].isActive) {
      return { status: 400, msg: 'user is already deactivated' };
    }
    const deactiveUserResp = await db.query(userQueries.deactiveUser, [
      id,
      isActive,
    ]);
    return { status: 200, msg: 'user has been deactivated.' };
  },
};

module.exports = userService;
