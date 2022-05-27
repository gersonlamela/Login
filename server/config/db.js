import mysql from "mysql";

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "loginpage",
});

db.getConnection((err, connection) => {
  if (err) throw err;
  console.log("DB connected successful: " + connection.threadId);
});
