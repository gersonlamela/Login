import jwt from "jsonwebtoken";
import "dotenv/config";
function validateToken(req, res, next) {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];

  console.log(authHeader);
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403);
    req.tokenData = decoded;

    next();
  });
}

export default validateToken;
