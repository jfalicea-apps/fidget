const userService = {
  insertUser: async function (fullname, email, password) {
    const db = require('../../db');
    const query = require('../common/queryService');
    const userExistQuery = await db.query(query.getSingleUser, [email]);
    const doesUserExit = userExistQuery.length ? true : false;
    console.log(doesUserExit);
    if (doesUserExit) {
      return { status: 400, msg: 'you already exist' };
    }
    const bcrypt = require('bcryptjs');
    const { v4: uuidv4 } = require('uuid');
    //const uuid = require('uuid');
    const key = uuidv4();
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    const insertQuery = query.newUserInsertQuery;
    console.log(query.newUserInsertQuery);
    const dbResp = await db.query(insertQuery, [fullname, email, key, hash]);
    // sendKeyViaEmail(email, key);
    return { status: 200, msg: dbResp };
  },
  deleteUser: function () {},
  getUser: function () {},
  updateUser: function () {},
};

module.exports = userService;
