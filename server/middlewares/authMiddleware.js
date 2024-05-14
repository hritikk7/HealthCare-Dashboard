const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const { authorization  } = req.headers;
  console.log("authorization in req.headers:", req.headers);

  const token = authorization.slice(7, authorization.length);
  try {
    let decoded = jwt.verify(token , "ssssh");
   
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({
      message: "Authorzation failed, Invalid Token",
      err,
    });
  }
};


module.exports = verifyToken


