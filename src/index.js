console.clear();
const PORT = 3200;

const express = require("express");
const app = express();
app.use(express.json());
let cards = [];

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get('/card', (req, res) => {
    if (cards?.length) {
        res.json(cards);
    } else {
        res.status(404).json(cards || [])
    }
});

app.post('/card', (req, res) => {
    cards = [...cards, req.body];
    res.send(cards);
});

app.get('/card/:id', (req, res) => {
    const id = req.params.id;
    const card = cards[0].find(u => u.id === +id);
    
    if (!card) {
        res.status(404).json("Not found gulu");
    }
    res.json(card);
});

app.listen(PORT, () => {
    console.log(`Your port is ${PORT} http://localhost:${PORT}`);
});
