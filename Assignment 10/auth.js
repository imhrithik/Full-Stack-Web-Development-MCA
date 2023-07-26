const express = require('express');
const passport = require('passport');

const router = express.Router();

router.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
  res.json({ success: true, message: 'Authentication successful' });
});

module.exports = router;
