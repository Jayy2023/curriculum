const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json('Hello, World!');
});

app.listen(4040, () => {
  console.log('Server listening on port 4040');
});
