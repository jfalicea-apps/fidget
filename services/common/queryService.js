const userQueries = {
  intakeform: `INSERT INTO users ("fullname","firstName", "lastName", "email", "userkey","password", "address1", "address2", "city", "state" ,"zipCode", "dateOfBirth", "agreedTOC", "genderOrIdentity", "educationalLevel") VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15) returning id`,
  getSingleUser: `SELECT email, id FROM users WHERE email = $1`,
  deactiveUser: `UPDATE users SET "isActive" = false WHERE "id"=$1 returning "isActive";`,
  getUserHash: `SELECT "password" FROM users WHERE id=$1`,
  deleteUser: `DELETE FROM users WHERE "id"=$1`,
};

const securityCheckQueries = {
  doesKeyExist: `SELECT userkey, id FROM users WHERE userkey = $1`,
};

const buttonQueries = {
  insertNewEmoteQuery: `INSERT INTO fidget (fidgetbtnvalue,fidgetText,fidgetTransactionId, userKey) VALUES ($1,$2,$3,$4) returning fidgetTransactionId`,
};
module.exports = { userQueries, securityCheckQueries, buttonQueries };
