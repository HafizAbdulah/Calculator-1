const express = require('express');
const calc = require('./calculator'); // Make sure this path is correct
const path = require('path');

const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors()); // ✅ Add this before routes


app.use(express.static(path.join(__dirname, 'public')));

// Add Routes
app.get('/add', (req, res) => {
  const { a, b } = req.query;
  res.send({ result: calc.add(Number(a), Number(b)) });
});

app.get('/sub', (req, res) => {
  const { a, b } = req.query;
  res.send({ result: calc.sub(Number(a), Number(b)) });
});

app.get('/multiply', (req, res) => {
  const { a, b } = req.query;
  res.send({ result: calc.multiply(Number(a), Number(b)) });
});

app.get('/divide', (req, res) => {
  const { a, b } = req.query;
  res.send({ result: calc.divide(Number(a), Number(b)) });
});

app.listen(port, () => {
  console.log(`✅ Server is running at http://localhost:${port}`);
});
