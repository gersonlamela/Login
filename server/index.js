const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "banco",
});

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
  const nome = req.body.nome;
  const apelido = req.body.apelido;
  const telemovel = req.body.telemovel;
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length == 0) {
      bcrypt.hash(password, saltRounds, (erro, hash) => {
        db.query(
          "INSERT INTO usuarios (nome,apelido,telemovel,email,password) VALUES (?,?,?,?,?)",
          [nome, apelido, telemovel, email, hash],
          (err, response) => {
            if (err) {
              res.send(err);
            }

            res.send({ msg: "Registado com sucesso" });
          }
        );
      });
    } else {
      res.send({ msg: "Usuário já registado" });
    }
  });
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
    if (err) {
      req.send(err);
    }
    //Email existe
    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (erro, result) => {
        if (result) {
          res.send({ msg: "Logado com sucesso" });
        } else {
          res.send({ msg: "A senha está incorreta" });
        }
      });
    } else {
      res.send({ msg: "Email não registado" });
    }
  });
});

app.listen(3001, () => {
  console.log("Rodando na porta 3001");
});
