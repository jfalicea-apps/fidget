const db = require('../../db');
const { securityCheckQueries } = require('../common/queryService');

/***********************************************************************
 *  Checks each incoming get/post keys for device authentication
 ************************************************************************/
let checkSecurityKey = async function (req, res, next) {
  const key = req.query.userkey;
  const checkKeyQuery = securityCheckQueries.doesKeyExist;
  const dbResp = await db.query(checkKeyQuery, [key]);
  if (!dbResp.length) {
    return res
      .status(401)
      .json('You are not authorized.  Please send a valid user key');
  }
  res.locals.userInfo = {
    userKey: dbResp[0].userkey,
    id: dbResp[0].id,
  };
  next();
};

module.exports = {
  checkSecurityKey,
};
