const express = require('express');

const app = express();
const PORT = 3003;

app.get('/', (req, res) => {
  res.send('<h3>Hello, YScalingo with NodeJS !</h3>');
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});