const express = require('express');
const { parser } = require('./utils/parser')

app = express();

// Public Path
// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile('views/index.html', { root: __dirname });
});

app.get('/api', (req, res) => {
  console.log(req.headers);

  const parsedData = parser(req);
  
  res.send(parsedData);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  `Server running on port ${port}...`;
});
