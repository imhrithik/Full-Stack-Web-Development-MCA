const express = require('express');
const passport = require('passport');
const authRoutes = require('./auth');

const app = express();

app.use(express.json());
app.use(passport.initialize());

app.use('/auth', authRoutes);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
