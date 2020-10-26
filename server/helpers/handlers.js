const jwt = require("jsonwebtoken");

const jwtKey = process.env.TOKEN_SECRET;

const validation = (token) => {
  //console.log("entered validation?");
  if (!token) {
    return false;
  }

  let verification = "";

  try {
    //console.log("trying verification...");
    verification = jwt.verify(token, jwtKey);
  } catch (e) {
    if (e instanceof jwt.JsonWebTokenError) {
      return false;
    }
    return false;
  }

  //console.log("verification done------->", verification);
  return verification.id;
  
};

module.exports = { validation };
