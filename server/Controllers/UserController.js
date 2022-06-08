import { db } from "../config/db.js";

export default {
  async me(req, res) {
    const { userId } = req.params;

    db.query("SELECT * FROM users WHERE id = ?", [userId], (err, result) => {
      if (err) {
        req.send(err);
      }
      const data = result[0];
      data.password = undefined;
      return res.json({ auth: true, data });
    });
  },
};
