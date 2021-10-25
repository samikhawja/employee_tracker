const express = require('express');
const mysql = require('mysql2');
const app = express();
const PORT = process.env.PORT || 3001;

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "password",
        database: "tracker_db"
    }
)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});