/* app.post('/login', (req, res) => {
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
*/