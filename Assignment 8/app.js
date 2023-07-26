const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
  const users = [
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Smith', email: 'jane@example.com' },
    { name: 'Bob Johnson', email: 'bob@example.com' }
  ];

  res.json(users);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
