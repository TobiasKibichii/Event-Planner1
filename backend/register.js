/* app.post('/register', (req, res) => {
    const { email, password } = req.body;
    const query = "INSERT INTO users (email, password) VALUES(?, ?)";
    db.query(query, [email, password], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'db error' });
        }
        res.status(201).json({ message: 'successful registartion' });
    });
});
*/