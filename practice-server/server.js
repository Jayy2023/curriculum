const express = require('express');
const app = express();

app.get('/heartbeat', (req, res) => {
  res.json({ is: 'Working!'});
});

app.listen(4040, () => {
  console.log('Server listening on port 4040');
});
