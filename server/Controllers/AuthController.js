import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import "dotenv/config";

import { db } from "../config/db.js";
const saltRounds = 10;

export default {
  async login(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
      if (err) {
        req.send(err);
      }
      //Email existe
      if (result.length > 0) {
        const nome = result[0].nome;
        const apelido = result[0].apelido;
        const telemovel = result[0].telemovel;

        const id = result[0].id;

        bcrypt.compare(password, result[0].password, (erro, result) => {
          if (result) {
            var token = jwt.sign({ id }, process.env.JWT_SECRET, {
              expiresIn: 86400, // expires in 5min
            });
            console.log(token);
            res.status(200).send({
              accessToken: token,
            });

            db.query(`UPDATE users SET last_login = now() WHERE email = ?`, [
              email,
            ]);
          } else {
            res.status(200).json({ msg: "A senha está incorreta" });
          }
        });
      } else {
        res.status(200).json({ msg: "Email não registado" });
      }
    });
  },
  async register(req, res) {
    const nome = req.body.nome;
    const apelido = req.body.apelido;
    const telemovel = req.body.telemovel;
    const email = req.body.email;
    const password = req.body.password;

    db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
      if (err) {
        res.status(200).json(err);
      }
      if (result.length == 0) {
        bcrypt.hash(password, saltRounds, (erro, hash) => {
          db.query(
            "INSERT INTO users (nome,apelido,telemovel,email,password) VALUES (?,?,?,?,?)",
            [nome, apelido, telemovel, email, hash],
            (err, response) => {
              if (err) {
                res.status(200).json(err);
              }
              /*  res.status(200).json({ msg: "Registado com sucesso" }); */
              res.status(200);
            }
          );
        });
      } else {
        res.status(200).json({ msg: "Usuário já registado" });
      }
    });
  },

  async welcome(req, res) {
    res.status(200).send("Welcome 🙌 ");
    console.log("Welcome");
  },
};
