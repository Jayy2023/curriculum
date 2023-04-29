const express = require('express');
const {checkAuth} = require('./middleware');
const app = express();
app.use(express.json());
app.use(checkAuth)

app.get('/heartbeat',(req, res) => {
  res.json({
    'is': "working"
  });
});
app.post('/auth/login', (req, res) => {
res.send(`${req.body.username}, ${req.body.password}`);
})
  
app.listen(8282, () => {
  console.log('Server listening on port 8282');
});
