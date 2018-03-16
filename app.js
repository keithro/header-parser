const express = require('express');
const { parser } = require('./utils/parser')
const path = require('path');

app = express();

// Public Path
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile('views/index.html', { root: __dirname });
});

app.get('/api', (req, res) => {
  const parsedData = parser(req);
  
  res.status(200).send(parsedData);
});

app.get('/*', (req, res) => {
  res.status(404);
  res.redirect('/');
})

// Server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  `Server running on port ${port}...`;
});
