const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

let products = [
  { id: 1, name: 'Laptop', price: 70000 },
  { id: 2, name: 'Mobile phone', price: 25000 }
];

app.get('/', (req, res) => {
  res.send('Welcome to the Product API. Visit <a href="https://example.com">our website</a>.');
});

app.get('/products', (req, res) => res.json(products));

app.post('/products', (req, res) => {
  const newProduct = { ...req.body, id: products.length + 1 };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  product ? res.json(product) : res.status(404).json({ message: 'Product not found' });
});

app.put('/products/:id', (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Product not found' });
  products[index] = { ...products[index], ...req.body };
  res.json(products[index]);
});

app.delete('/products/:id', (req, res) => {
  products = products.filter(p => p.id !== parseInt(req.params.id));
  res.status(204).send();
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
