const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello mama I can code Node Now!!')
});

const users = [
    { id: 1, name: 'shabana', email: 'sab@gmail.com', phone: '023123' },
    { id: 2, name: 'shabnur', email: 'shabnur@gmail.com', phone: '023123' },
    { id: 3, name: 'suchorita', email: 'suchb@gmail.com', phone: '023123' },
    { id: 4, name: 'bubly', email: 'bub@gmail.com', phone: '023123' },
    { id: 5, name: 'babita', email: 'bab@gmail.com', phone: '023123' },
    { id: 6, name: 'sabita', email: 'sab@gmail.com', phone: '023123' },
    { id: 7, name: 'sraboni', email: 'sraboni@gmail.com', phone: '023123' },
]

app.get('/users', (req, res) => {
    // filter by query parameter / search parameter
    if (req.query.name) {
        const search = req.query.name;
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users);
    }
})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = users.find(u => u.id == id);
    res.send(user);
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'papaya']);
})

app.get('/fruits/mango/fazli', (req, res) => {
    res.send('sour and sweet');
})

app.listen(port, () => {
    console.log('Listening to port', port);
})