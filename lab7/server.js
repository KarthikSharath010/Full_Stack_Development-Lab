// Import Express
//Subscribe Our Channel https://www.youtube.com/dost2web/
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Custom middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
//Subscribe Our Channel https://www.youtube.com/dost2web/

// Sample product data
let products = [
  { id: 1, name: 'Laptop', price: 70000 },
  { id: 2, name: 'Mobile phone', price: 25000 }
];

// Basic server route
//Subscribe Our Channel https://www.youtube.com/dost2web/

app.get('/', (req, res) => {
  res.send('Hello, Express!<a href="https://www.youtube.com/dost2web/">Subscribe My Dost2web Channel</a>');
});

// REST API Endpoints
//Subscribe Our Channel https://www.youtube.com/dost2web/

// GET all products
app.get('/products', (req, res) => {
  res.json(products);
});

// POST add new product
app.post('/products', (req, res) => {
  const newProduct = req.body;
  newProduct.id = products.length + 1; // Auto increment id
  products.push(newProduct);
  res.status(201).json(newProduct);
});
//Subscribe Our Channel https://www.youtube.com/dost2web/

// GET product by ID
app.get('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(product);
});

// PUT update product by ID
app.put('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const productIndex = products.findIndex(p => p.id === id);

  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }

  products[productIndex] = { ...products[productIndex], ...req.body };
  res.json(products[productIndex]);
});

// DELETE product by ID
app.delete('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  products = products.filter(p => p.id !== id);
  res.status(204).send();
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
//Subscribe Our Channel https://www.youtube.com/dost2web/