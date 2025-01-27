const express = require('express');
const server = express();
const port = 5005;

const items = [
  { id: 1, name: "kurta" },
  { id: 2, name: "shirts" },
  { id: 3, name: "jeans" },
];

server.use(express.json());

server.get('/', (req, res) => {
  res.end("server is running");
});

server.get('/user', (req, res) => {
  res.json(items);
});

server.post('/product', (req, res) => {
  const newitem = { id: items.length + 1, name: req.body.name };
  items.push(newitem);
  res.status(201).json(newitem);
});

server.put('/product/:id', (req, res) => {
  const itemid = parseInt(req.params.id);
  const updateditem = items.findIndex((item) => item.id === itemid);

  if (updateditem !== -1) {
    items[updateditem].name = req.body.name;
    res.json(items[updateditem]);
  } else {
    res.status(404).json({ error: "Item not found in the database" });
  }
});

server.delete('/product/:id', (req, res) => {
  const itemid = parseInt(req.params.id);
  const itemIndex = items.findIndex((item) => item.id === itemid);

  if (itemIndex !== -1) {
    const deletedItem = items.splice(itemIndex, 1);
    res.json(deletedItem);
  } else {
    res.status(404).json({ error: "Item not found in the database" });
  }
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
