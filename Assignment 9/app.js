const express = require('express');
const fs = require('fs');
const app = express();

app.get('/api/data', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading data from file:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
