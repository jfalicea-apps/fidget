const userQueries = {
  newUserInsertQuery: `INSERT INTO users (fullname, email, userkey,password) VALUES ($1,$2,$3,$4) returning userkey`,
  getSingleUser: `SELECT email, id FROM users WHERE email = $1`,
};

const securityCheckQueries = {
  doesKeyExist: `SELECT userkey, id FROM users WHERE userkey = $1`,
};

const buttonQueries = {
  insertNewEmoteQuery: `INSERT INTO fidget (fidgetbtnvalue,fidgetText,fidgetTransactionId, userKey) VALUES ($1,$2,$3,$4) returning fidgetTransactionId`,
};
module.exports = { userQueries, securityCheckQueries, buttonQueries };
