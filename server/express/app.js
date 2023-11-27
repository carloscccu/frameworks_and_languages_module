const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const uuid = require('uuid');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let items = [];

app.get('/', (req, res) => {
    res.status(200).send('<html><body>Welcome to the Server</body></html>');
});

app.post('/item', (req, res) => {
    const { user_id, keywords, description, lat, lon } = req.body;
    
    if (!user_id || !Array.isArray(keywords) || !description || isNaN(lat) || isNaN(lon)) {
        return res.status(405).send('Invalid data');
    }
    
    const newItem = { id: uuid.v4(), user_id, keywords, description, lat, lon, date_from: new Date().toISOString() };
    items.push(newItem);
    res.status(201).json(newItem);
});

app.get('/item/:id', (req, res) => {
    const item = items.find(item => item.id === req.params.id);
    if (!item) {
        return res.status(404).send('Item not found');
    }
    res.status(200).json(item);
});

app.get('/items', (req, res) => {
    res.status(200).json(items);
});

app.delete('/item/:id', (req, res) => {
    const index = items.findIndex(item => item.id === req.params.id);
    if (index === -1) {
        return res.status(404).send('Item not found');
    }
    items.splice(index, 1);
    res.status(204).send();
});

app.options('/', (req, res) => {
    res.status(204).send();
});

app.options('/items', (req, res) => {
    res.status(204).send();
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
