const express = require('express');

app = express();

// Public Path
// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile('views/index.html', { root: __dirname });
});

app.get('/api', (req, res) => {
  const ipaddress = req.ip;
  const language = req.get('Accept-Language').split(',')[0];
  const userAgentString = req.get('User-Agent');
  const start = userAgentString.indexOf('(');
  const end = userAgentString.indexOf(')');
  const software = userAgentString.slice(start + 1, end);
  
  res.send({
    ipaddress,
    language,
    software
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  `Server running on port ${port}...`;
});
