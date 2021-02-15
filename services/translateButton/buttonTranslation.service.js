const buttonService = {
  insertNewEmotionService: async function (fidgetValue, userKey) {
    const db = require('../../db');
    const { buttonQueries } = require('../common/queryService');
    const { v4: uuidv4 } = require('uuid');
    const fidgetTransid = uuidv4();
    const originalFidgetValue = fidgetValue;
    switch (fidgetValue) {
      case 0:
        fidgetValue = 'sad';
        break;
      case 1:
        fidgetValue = 'ok';
        break;
      case 2:
        fidgetValue = 'happy';
        break;
      default:
        return { status: 401, msg: 'you sent an invalid value' };
    }
    let insertQuery = buttonQueries.insertNewEmoteQuery;
    console.log(insertQuery);
    let dbResp = await db.query(insertQuery, [
      originalFidgetValue,
      fidgetValue,
      fidgetTransid,
      userKey,
    ]);
    return { status: 200, msg: dbResp };
  },
};

module.exports = buttonService;
