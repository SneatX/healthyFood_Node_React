const session = require('express-session');

const sessionManager = session({
    secret: process.env.KEY_SECRET,
    resave: false,
    saveUninitialized: false
})

module.exports = sessionManager;
