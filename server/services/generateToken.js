import jwt from "jsonwebtoken";
import "dotenv/config";

function generateToken(params = {}) {
  return jwt.sign({ params }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
}

export default generateToken;
