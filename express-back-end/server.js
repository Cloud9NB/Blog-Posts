const express = require('express');
const app = express();
const PORT = 8001;

const api = require('./src/routes/api');

app.use('/api', api());

app.listen(PORT, () => {
  console.log('Express server is listening to port: ', PORT);
});