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

const books = [
    { id: 1, title: 'Dune' },
    { id: 2, title: 'The Hobbit' }
];

// Get all books
app.get('/books', (req, res) => {
    res.json(books);
});

// Get one book by id
app.get('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);
    if (!book) return res.status(404).json({error: 'Book not found'});
    res.json(book);
});

app.post('/books', (req, res) => {
    const { id, title } = req.body;
    if (!req.body) return res.status(400).json({error: 'Request body is required'});
    books.push({id, title});
    res.status(201).json({message: 'book successfully added'});
});

app.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (!id) return res.status(400).json({error: 'id is required to delete book'});

    const index = books.findIndex(b => b.id === id);
    if (index === -1) return res.status(404).json({error: 'book not found'});

    const deletedBook = books.splice(index, 1);
    res.json({
        message: 'book dleted successfully',
        book: deletedBook
    });
});


// Listen
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});