const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('ESTÁ VIVO!!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  `ouvindo na porta ${PORT}`  
});
