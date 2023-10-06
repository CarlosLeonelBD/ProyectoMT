const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mundo_tecnologico'
  });
  db.connect((err) => {
    if (err) {
      console.error('Error al conectar a MySQL:', err);
      throw err;
    }
    console.log('Conexión a MySQL exitosa');
  });

  app.use(bodyParser.urlencoded({
    extended:true
  }))

  app.use(express.static('./public'));

  app.get('/', (req,res) =>{
    res.sendFile(__dirname + 'public/index.html');
  })

  app.listen(PORT, () => {
    console.log('servidor corriendo en el puerto'+PORT);
  })