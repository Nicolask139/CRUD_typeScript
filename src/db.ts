import mysql from "mysql2";

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "imbriani10",
    database: "crud_example"
});

connection.connect((err) => {
    if (err) {
        console.error("Erro ao conectar ao banco de dados:", err);
        process.exit(1);
    }
    console.log("Conectando ao banco de dados.");
});

export default connection;