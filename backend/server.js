const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const dotenv = require('dotenv');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

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

app.post('/registerCustomer', (req, res) => {
     const { firstname,lastname,email, password,contact,gender,userAccount } = req.body;
    const query = "INSERT INTO customers (firstname,lastname,email, password,contact,gender, userAccount ) VALUES(?,?,?,?,?,?,?)";
    
    db.query(query, [firstname,lastname,email, password,contact,gender,userAccount], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'db error' });
        }
        res.status(201).json({ message: 'successful registartion' });
    });
});

app.post('/registerSeller', (req, res) => {
    const { firstname,lastname,email, password,contact,gender,image,userAccount, location} = req.body;
    console.log(req.body);
        const query = "INSERT INTO sellers (firstname,lastname,email, password,contact,gender,image,userAccount,location ) VALUES(?,?,?,?,?,?,?,?,?)";
    
    db.query(query, [firstname,lastname,email, password,contact,gender,image,userAccount,location], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'db error' });
        }
        res.status(201).json({ message: 'successful registartion' });
    });
    
});

app.post('/login', (req, res) => {
    const { email, password ,userAccount} = req.body;
    if(userAccount == 'seller'){
    const query = "SELECT * FROM sellers WHERE email = ? AND password = ?";
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
}else{
    const query = "SELECT * FROM customers WHERE email = ? AND password = ?";
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
}
});


app.post ('/upload', (req,res) =>{
    upload(req,res, (err) =>{
        if(err){
            res.send(`Error: ${err}`);
        }else {
            if (req.file==undefined){
                res.send(`Error: No file selected!`);
            }
            else{
            res.send(`File Uploaded: ${req.file.filename}`);
        }

        } 
    });
});



// Define the upload directory
const uploadDir = path.join(__dirname, 'uploads');

// Ensure the upload directory exists
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Configure multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir); // Use the upload directory
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // Limit file size to 1MB
  fileFilter: function(req, file, cb) {
    checkFileType(file, cb);
  }
}).single('image'); 

function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true); // If both checks pass, proceed with upload
  } else {
    cb('Error: Images Only!'); // If checks fail, an error message is passed to the callback
  }
}


