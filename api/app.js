const express = require ('express');

const app = express();

const port = process.env.port || 3000;

app.use(express.json());

app.get('/teste', (req, res) => {
    return res.send('teste')
  });

app.listen(port, () => {
    console.log(`O servidor escuta a porta: ${port}`);
  });