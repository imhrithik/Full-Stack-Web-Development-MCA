const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/userDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Define user schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String
});

// Create a user model
const User = mongoose.model('User', userSchema);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to handle user creation
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;

  // Create a new user
  const newUser = new User({ name, email });

  // Save the user to the database
  newUser.save((err) => {
    if (err) {
      res.status(500).json({ error: 'Error saving user to database' });
    } else {
      res.status(200).json({ message: 'User saved successfully' });
    }
  });
});

// Route to fetch all users
app.get('/api/users', (req, res) => {
  User.find((err, users) => {
    if (err) {
      res.status(500).json({ error: 'Error retrieving users from database' });
    } else {
      res.status(200).json(users);
    }
  });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
