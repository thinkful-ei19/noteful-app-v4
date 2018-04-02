'use strict';
const express = require('express');
const passport = require('passport');

const router = express.Router();

const localAuth = passport.authenticate('local', {session: false, failWithError: true});

router.post('/login', localAuth, function (req, res) {
  return res.json(req.user);
});

module.exports = router;
