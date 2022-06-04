import jwt from "jsonwebtoken";
import "dotenv/config";

function generateAccessToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1800",
  });
}

export default generateAccessToken;
