const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

db.connect((error) => {
    if(error){
        console.error('error connecting to mysql', error);
    }else{
        console.log('mysql connected');
    }
});

app.get('/', (req, res) => {
    res.send('server is running');
});

const PORT  = process.env.PORT || 5000;
app.listen(PORT, ()=> {
    console.log(`server is running on port ${PORT}`);
});

app.post('/register', (req, res) => {
    const { email, password } = req.body;
    const query = "INSERT INTO users (email, password) VALUES(?, ?)";
    db.query(query, [email, password], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'db error' });
        }
        res.status(201).json({ message: 'successful registartion' });
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const query = "SELECT * FROM users WHERE email = ? AND password = ?";
    db.query(query, [email, password], (err, result) => {
        if(err){
            return res.status(500).json({ error: 'db error' });
        }
        if(result.length > 0){
            return res.status(200).json({ message: 'logged in successfully' });
        }else{
            return res.status(401).json({ error: 'invalid credentials' });
        }
    });
});