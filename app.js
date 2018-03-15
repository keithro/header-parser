const express = require('express');

app = express();

// Public Path
app.use(express.static(path.join(__dirname, 'public'));

app.get('/', (req, res) => {
  res.sendFile('views/index.html', { root: __dirname });
});

app.get('/api', (req, res) => {
  res.send("hello from the query page");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  `Server running on port ${port}...`;
});