import jwt from "jsonwebtoken";

import "dotenv/config";

export default (request, response, next) => {
  const authHeader = request.headers.authorization;

  if (!authHeader)
    return response
      .status(401)
      .send({ auth: false, message: "No Token Provided" });

  const parts = authHeader.split(" ");

  if (parts.length !== 2)
    return response
      .status(401)
      .send({ auth: false, message: "Invalid Token Format" });

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme))
    return response
      .status(401)
      .send({ auth: false, message: "Invalid Token Format" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err)
      return response
        .status(401)
        .send({ auth: false, message: "Token Invalid" });

    request.params.userId = decoded.params.id;
    return next();
  });
};
