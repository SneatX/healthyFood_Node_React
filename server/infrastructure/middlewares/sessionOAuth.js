const session = require('express-session');
const sessionManager = require('express').Router();

module.exports = sessionManager.use(session({
    secret: process.env.KEY_SECRET,
    resave: false,
    saveUninitialized: false
}))
