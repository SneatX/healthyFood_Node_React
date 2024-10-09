const session = require('express-session');

const sessionManager = session({
    secret: process.env.KEY_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: false,
        maxAge: 15 * 60 * 1000 // 15 minutos
    }
})

module.exports = sessionManager;
