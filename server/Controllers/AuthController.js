import bcrypt from "bcrypt";

import generateToken from "../services/generateToken.js";

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
        const id = result[0].id;
        const user = result[0];
        bcrypt.compare(password, result[0].password, (erro, result) => {
          if (result) {
            user.password = undefined;
            const token = generateToken({ id });
            res.status(200).send({
              token,
              user,
            });

            db.query(`UPDATE users SET last_login = now() WHERE email = ?`, [
              email,
            ]);
          } else {
            res.status(201).json({ msg: "A senha está incorreta" });
          }
        });
      } else {
        res.status(201).json({ msg: "Email não registado" });
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
        res.status(201).json(err);
      }
      if (result.length == 0) {
        bcrypt.hash(password, saltRounds, (erro, hash) => {
          db.query(
            "INSERT INTO users (nome,apelido,telemovel,email,password) VALUES (?,?,?,?,?)",
            [nome, apelido, telemovel, email, hash],
            (err, response) => {
              if (err) {
                res.status(201).json(err);
              }
              /*  res.status(200).json({ msg: "Registado com sucesso" }); */
              res.status(200);
            }
          );
        });
      } else {
        res.status(201).json({ msg: "Usuário já registado" });
      }
    });
  },

  async welcome(req, res) {
    console.log(req.userId);
    res.status(200).send("Welcome 🙌 ");
    console.log("Welcome");
  },
};
