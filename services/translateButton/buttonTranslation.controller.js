const db = require('../../db');
const { insertNewEmotionService } = require('./buttonTranslation.service');
const buttonController = {
  insertNewEmote: async function (req, res, next) {
    const fidgetValue = parseInt(req.body.fidgetValue);
    const userKey = res.locals.userInfo.userKey;
    if ((fidgetValue !== 0) & (fidgetValue !== 1) & (fidgetValue !== 2)) {
      return res
        .status(400)
        .json(
          "request sent should've been a number, and the value should be 0 for happy, 1 for ok, 2 for sad."
        );
    }
    const insertNewEmoteServiceResponse = await insertNewEmotionService(
      fidgetValue,
      userKey
    );
    if (insertNewEmoteServiceResponse.status != 200) {
      return res.status(500).json(insertNewEmoteServiceResponse.msg);
    }
    return res.status(200).json(insertNewEmoteServiceResponse);
  },
};

module.exports = buttonController;
