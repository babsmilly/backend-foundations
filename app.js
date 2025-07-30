const express = require('express');
const app = express();

// Middleware: Parse incoming JSON
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to express');
});

app.get('/about', (req, res) => {
    res.send('This is the about page');
});

app.get('/contact', (req, res) => {
    res.send('Contact us at...');
});

app.get('/api/hello', (req, res) => {
    res.json({message: 'Hello from the API!'});
});

// Listen
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});