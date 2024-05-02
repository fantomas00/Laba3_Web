const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = new sqlite3.Database('database.db');

function isEmailExist(email, callback) {
    const query = `SELECT * FROM users WHERE email = ?`;
    db.get(query, [email], (err, row) => {
        if (err) {
            return callback(err);
        }
        callback(null, !!row);
    });
}

app.post('/api/register', (req, res) => {
    const { name, email, pass, pass_repeat } = req.body;

    // Проверка совпадения паролей
    if (pass !== pass_repeat) {
        return res.status(400).json({ error: 'Passwords do not match' });
    }

    // Проверка существования email в базе данных
    isEmailExist(email, (err, exists) => {
        if (err) {
            return res.status(500).json({ error: 'Internal server error' });
        }
        if (exists) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        // Добавление пользователя в базу данных
        const query = `INSERT INTO users (name, email, pass) VALUES (?, ?, ?)`;
        db.run(query, [name, email, pass], (err) => {
            if (err) {
                return res.status(500).json({ error: 'Internal server error' });
            }
            res.status(200).json({ message: 'User registered successfully' });
        });
    });
});

app.post('/api/login', (req, res) => {
    const { email, pass } = req.body;

    // Проверка существования email в базе данных
    isEmailExist(email, (err, exists) => {
        if (err) {
            return res.status(500).json({ error: 'Internal server error' });
        }
        if (!exists) {
            return res.status(400).json({ error: 'Email not found' });
        }

        // Получение пользователя из базы данных
        const query = `SELECT * FROM users WHERE email = ? AND pass = ?`;
        db.get(query, [email, pass], (err, row) => {
            if (err) {
                return res.status(500).json({ error: 'Internal server error' });
            }
            if (!row) {
                return res.status(400).json({ error: 'Incorrect password' });
            }

            // Успешная аутентификация
            res.status(200).json({ message: 'Login successful', user: row });
        });
    });
});
app.get('/api/calculate', (req, res) => {
    const expression = req.query.expression;
    const evaluate = (expression) => {
        try {
            return eval(expression);
        } catch (error) {
            throw new Error('Invalid expression');
        }
    };

    try {
        const result = evaluate(expression);
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
